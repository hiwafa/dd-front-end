package com.example.deepdialog;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.text.Layout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import com.example.deepdialog.MainActivity;
import com.example.deepdialog.R;
import com.example.deepdialog.chat.ChatActivity;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.snackbar.Snackbar;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.util.concurrent.Executor;


public class LoginFragment extends Fragment {
    private static final String TAG = "login";
    Button login;
    EditText email, pswd;
    String user, pass;
    DataCom dataCom;
    LoginActivity main = new LoginActivity();
    ProgressBar bar;
    private FirebaseAuth mAuth;
    private FirebaseUser mUser;
    private Snackbar snackbar;


    public LoginFragment() {
        // Required empty public constructor
    }



    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable final Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_login, container, false);

        email = view.findViewById(R.id.et_email);
        pswd = view.findViewById(R.id.et_password);
        login = view.findViewById(R.id.btn_login);
        bar = view.findViewById(R.id.progressBar);

        mAuth = FirebaseAuth.getInstance();
        mUser = FirebaseAuth.getInstance().getCurrentUser();

        login = (Button) view.findViewById(R.id.btn_login);
        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                bar.setVisibility(View.VISIBLE);

                String user = email.getText().toString();
                String paswd = pswd.getText().toString();
                if (user.isEmpty()) {
                    email.setError("Provide your Email first!");
                    email.requestFocus();
                } else if (paswd.isEmpty()) {
                    pswd.setError("Enter your password");
                    pswd.requestFocus();
                }
                else if (user.isEmpty() && paswd.isEmpty()) {
                    Toast.makeText(getActivity(), "Fields Empty!", Toast.LENGTH_SHORT).show();
                } else if (!(user.isEmpty() && paswd.isEmpty())) {

                    mAuth.signInWithEmailAndPassword(user, paswd).addOnCompleteListener(getActivity(), new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if (task.isSuccessful()) {
                                Intent intent = new Intent(getActivity(), MainActivity.class);
                                startActivity(intent);
                                bar.setVisibility(View.INVISIBLE);
                            } else {
                                Toast.makeText(getActivity(), "Wrong username or password", Toast.LENGTH_SHORT).show();
                                bar.setVisibility(View.INVISIBLE);
                            }
                        }
                    });
                }
            }
        });

        return view;
    }

}