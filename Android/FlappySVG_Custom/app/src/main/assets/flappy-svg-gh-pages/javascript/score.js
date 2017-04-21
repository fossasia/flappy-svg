function updateScore(){
	var score_element = document.getElementById("score");
	var score = Number(score_element.innerHTML);
	score_element.innerHTML = score+1;
}
