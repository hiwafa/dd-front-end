package com.example.deepdialog.ui;

import android.content.Intent;
import android.graphics.Typeface;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.deepdialog.MainActivity;
import com.example.deepdialog.R;
import com.example.deepdialog.chat.ChatActivity;

/**
 * Created by User on 4/9/2017.
 */

public class aboutMe extends Fragment {
    private static final String TAG = "aboutMe";

    private TextView startFeed, groups, about, acc, chat, logout;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable final Bundle savedInstanceState) {
        View view  = inflater.inflate(R.layout.fragment_about_me, container, false);

        return view;
    }
}