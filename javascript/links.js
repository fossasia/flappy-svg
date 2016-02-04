function android()
{
	if(document.getElementById('x3').innerHTML.indexOf('i')!=1)
	{
		window.location="https://play.google.com/store/apps/details?id=fossasia.flappysvg";
	}
	else
	{
	document.getElementById('x2').style.display="none";
	document.getElementById('x1').style.display="none";
	document.getElementById('x3').innerHTML="<div style='margin-top:20px;margin-left:-3px;'><b>Play Store</b></div>";
	document.getElementById('x4').innerHTML="<div style='margin-top:15px;'><b>APK</b></div>";
	document.getElementById('x3img').style.display="none";
	document.getElementById('x4img').style.display="none";
	}
}