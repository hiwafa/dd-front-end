package com.example.deepdialog;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.deepdialog.MainActivity;
import com.example.deepdialog.R;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class RegisterFragment extends Fragment  {
    private static final String TAG = "register";
    //Register variables
    private EditText emailID, password;
    private Button register;
    private FirebaseAuth mAuth;


    public RegisterFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable final Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_register, container, false);
        mAuth = FirebaseAuth.getInstance();
        emailID = (EditText) view.findViewById(R.id.et_email);
        password = (EditText) view.findViewById(R.id.et_password);

        register = (Button) view.findViewById(R.id.btn_register);
        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String user = emailID.getText().toString();
                String paswd = password.getText().toString();
                if (user.isEmpty()) {
                    emailID.setError("Provide your Email first!");
                    emailID.requestFocus();
                } else if (paswd.isEmpty()) {
                    password.setError("Set your password");
                    password.requestFocus();
                }
                else if (user.isEmpty() && paswd.isEmpty()) {
                    Toast.makeText(getActivity(), "Fields Empty!", Toast.LENGTH_SHORT).show();
                } else if (!(user.isEmpty() && paswd.isEmpty())) {

                    mAuth.createUserWithEmailAndPassword(user, paswd).addOnCompleteListener(getActivity(), new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if (task.isSuccessful()) {
                                // Do your task in success
                            } else {
                                // Do your task in failure

                            }
                        }
                    });
                }
            }
        });

        return view;
    }



}