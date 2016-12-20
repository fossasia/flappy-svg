package org.fossasia.www.flappysvg;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.os.Handler;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.webkit.WebView;

public class CentreActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(!isNetworkAvailable()){
            new Handler().postDelayed(new Runnable(){
                @Override
                public void run() {
                /* Create an Intent*/
                    Intent mainIntent = new Intent(CentreActivity.this,NoConnection.class);
                    CentreActivity.this.startActivity(mainIntent);
                    CentreActivity.this.finish();
                }
            },10);
        }
        setContentView(R.layout.activity_centre);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        WebView webView = (WebView) findViewById(R.id.mainview);
        webView.loadUrl("https://abhi2424shek.github.io/FlappySvg-frontend/welcome.html");
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        WebView webView = (WebView) findViewById(R.id.mainview);
        int id = item.getItemId();
        if (id == R.id.nav_play) {
            webView.loadUrl("http://fossasia.github.io/flappy-svg/");
        } else if (id == R.id.nav_leaderboards) {
            webView.loadUrl("http://fossasia.github.io/flappy-svg/leaderboard.html");
        } else if (id == R.id.nav_howtoplay) {
            webView.loadUrl("http://fossasia.github.io/flappy-svg/howtoplay.html");
        } else if (id == R.id.nav_fossasia) {
            webView.loadUrl("http://fossasia.org/about.html");
        } else if (id == R.id.nav_flappySVG) {
            webView.loadUrl("http://fossasia.github.io/flappy-svg/credits.html");
        } else if (id == R.id.nav_about) {
            webView.loadUrl("https://abhi2424shek.github.io/FlappySvg-frontend/about.html");
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
