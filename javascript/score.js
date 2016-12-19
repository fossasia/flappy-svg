function updateScore(){
	var score_element = document.getElementById("tspan17169");
	var score = Number(score_element.innerHTML);
	score_element.innerHTML = score+1;
}
