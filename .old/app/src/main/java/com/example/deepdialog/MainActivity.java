package com.example.deepdialog;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

//import frags
import com.example.deepdialog.chat.ChatActivity;
import com.example.deepdialog.ui.aboutMe;
import com.example.deepdialog.ui.accountFrag;
import com.example.deepdialog.ui.feed;
import com.example.deepdialog.ui.groupsFrag;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;


import androidx.annotation.MainThread;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.viewpager.widget.ViewPager;


public class MainActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity";

    private SectionsStatePagerAdapter mSectionsStatePagerAdapter;
    private ViewPager mViewPager;
    FirebaseAuth mFirebaseAuth;
    FirebaseAuth.AuthStateListener mAuthListener;
    //Navigation
    private TextView startFeed, groups, about, acc, chat, logout;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.d(TAG, "onCreate: Started.");

        //Navigation
        startFeed =  findViewById(R.id.startFeed);
            startFeed.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    setViewPager(1);
                    Toast.makeText(MainActivity.this, "Start Feed", Toast.LENGTH_SHORT).show();
                }
            });
        about =  findViewById(R.id.aboutMe);
            about.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    setViewPager(2);
                    Toast.makeText(MainActivity.this, "About Me", Toast.LENGTH_SHORT).show();
                }
            });
        groups =  findViewById(R.id.groupsButton);
            groups.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    setViewPager(3);
                    Toast.makeText(MainActivity.this, "Groups", Toast.LENGTH_SHORT).show();
                }
            });
        chat = findViewById(R.id.chatButton);
            chat.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(MainActivity.this, ChatActivity.class);
                    startActivity(intent);
                }
            });
        acc =  findViewById(R.id.accountBtn);
            acc.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    setViewPager(4);
                    Toast.makeText(MainActivity.this, "Account", Toast.LENGTH_SHORT).show();
                }
            });
        logout = findViewById(R.id.logoutBtn);
            logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mFirebaseAuth.removeAuthStateListener(mAuthListener);
                mFirebaseAuth.getInstance().signOut();
                finish();
            }
        });

        mSectionsStatePagerAdapter = new SectionsStatePagerAdapter(getSupportFragmentManager());
        mViewPager = (ViewPager) findViewById(R.id.fragmentContainer);
        //setup the pager
        setupViewPager(mViewPager);

            //tracking the sign in and singn out operations
            mFirebaseAuth = FirebaseAuth.getInstance();
            mAuthListener = new FirebaseAuth.AuthStateListener(){
                @Override
                public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {
                    FirebaseUser user = firebaseAuth.getCurrentUser();
                    if (user!=null){
                        System.out.println("User logged in");
                    }
                    else{
                        System.out.println("User not logged in");
                    }
                }
            };
        }


        public void onStart(){
            super.onStart();
            mFirebaseAuth.addAuthStateListener(mAuthListener);
        }
        public void onStop(){
            super.onStop();
            if (mAuthListener != null) {
                mFirebaseAuth.removeAuthStateListener(mAuthListener);
                mFirebaseAuth.getInstance().signOut();
            }
        }



    private void setupViewPager(ViewPager viewPager){
        SectionsStatePagerAdapter adapter = new SectionsStatePagerAdapter(getSupportFragmentManager());
        adapter.addFragment(new feed(), "StartFeed"); //2
        adapter.addFragment(new aboutMe(), "AboutMe"); //3
        adapter.addFragment(new groupsFrag(), "Groups"); //4
        adapter.addFragment(new accountFrag(), "Account"); //5
        viewPager.setAdapter(adapter);
    }

    public void setViewPager(int fragmentNumber){
        mViewPager.setCurrentItem(fragmentNumber);
    }

}