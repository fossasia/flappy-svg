function android(instance)
{
	if(instance==1)
	{


		document.getElementById('x2').style.display="none";
		document.getElementById('x1').style.display="none";
		document.getElementById('x0').innerHTML="<div id=x0' ><a href='javascript:androidPageChanges(1)'><img id='x' src='images/back.png' /></a></div>"
		document.getElementById('x3').innerHTML="<a href='javascript:android(0)'><img id='x3img' src='images/playStore.svg' /></a>";
		document.getElementById('x4').innerHTML="<a href='javascript:contributors(0)'><img id='x4img' src='images/apk.png' /></a>";
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
function androidPageChanges(instance)
{
	if(instance==0)
	{
		window.location="index.html";
	}
	else
	{
		window.location="links.html";
	}
}
