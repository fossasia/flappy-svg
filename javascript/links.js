function android(instance)
{
	if(instance==1)
	{
		document.getElementById('x2').style.display="none";
		document.getElementById('x1').style.display="none";
		document.getElementById('x3').innerHTML="<div style='margin-top:20px;margin-left:-3px;'><a href='javascript:android(0)'><b>Play Store</b></a></div>";
		document.getElementById('x4').innerHTML="<div style='margin-top:15px;'><a href='javascript:contributors(0)'><b>APK</b></a></div>";
		document.getElementById('x3img').style.display="none";
		document.getElementById('x4img').style.display="none";
	}
	else
	{
		
		window.open('https://play.google.com/store/apps/details?id=fossasia.flappysvg','_blank');
        	
	}
}
function contributors(instance)
{
	if(instance==1)
	{
		window.location="credits.html";
	}
	else
	{
		window.location="https://github.com/fossasia/flappy-svg/blob/master/FlappySVG_Android/app-release.apk?raw=true";
	}
}
