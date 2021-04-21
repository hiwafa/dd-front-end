package com.example.deepdialog.chat;

import android.os.Bundle;
import android.widget.EditText;
import android.widget.ListView;
import com.example.deepdialog.R;
import com.example.deepdialog.RegisterFragment;

import androidx.appcompat.app.AppCompatActivity;



import java.util.Random;

public class ChatActivity extends AppCompatActivity  {

    // replace this with a real channelID from Scaledrone dashboard
    private String channelID = "6QWFZJ5WEih4dpY6";
    private String roomName = "observable-room";
    private EditText editText;
    private ListView messagesView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat);

        editText = (EditText) findViewById(R.id.editText);

    }

    private String getRandomColor() {
        Random r = new Random();
        StringBuffer sb = new StringBuffer("#");
        while(sb.length() < 7){
            sb.append(Integer.toHexString(r.nextInt()));
        }
        return sb.toString().substring(0, 7);
    }
}

