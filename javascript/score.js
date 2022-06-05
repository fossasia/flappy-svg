function updateScore(){
	var score_element = document.getElementById("tspan17169");
	var score = Number(score_element.innerHTML);
	score_element.innerHTML = score+1;
}

function updateDistance(){
    var distance_element = document.getElementById("tspan_distance");
    var distance = Number(distance_element.innerHTML);
    distance_element.innerHTML = distance+1;
}
