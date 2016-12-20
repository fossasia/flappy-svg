package org.fossasia.www.flappysvg;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class NoConnection extends AppCompatActivity {

    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_no_connection);
        Button retryButton = (Button) findViewById(R.id.button);
        retryButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v){
                if(isNetworkAvailable()){
                    new Handler().postDelayed(new Runnable(){
                        @Override
                        public void run() {
                            /* Create an Intent*/
                            Intent mainIntent = new Intent(NoConnection.this,CentreActivity.class);
                            NoConnection.this.startActivity(mainIntent);
                            NoConnection.this.finish();
                        }
                    },10);
                }
            }
        });

    }
}
