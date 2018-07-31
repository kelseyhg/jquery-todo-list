
var counter = 0;

$(document).ready(function() {
    console.log( "ready!" );
    $("#new-task").focus();
});

$("button").on("click", function() {
	console.log("clicked");
	var newTask = document.getElementById("new-task").value;
	console.log(newTask + " task");
	var addTask = $("<div class=\"item\" id=\"" + counter + "\"></div>").text(newTask);
	$("#task-list").append(addTask);
	var newDiv = document.getElementById(counter);
	newDiv.innerHTML += "<button class=\"delete\">X</button> <button class =\"complete\">finished</button> ";
	document.getElementById("new-task").value = "";
	$("#new-task").focus();
	counter ++;
	console.log(counter);
	addListeners();
	addStrikeListeners();
});


function addListeners() {
 var deleteButtons = document.getElementsByClassName("delete");

 for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", destroy);
	console.log(deleteButtons);
 }
}

function destroy(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}


function addStrikeListeners() {
 var crossButtons = document.getElementsByClassName("complete");
 console.log(crossButtons);
 for (var i = 0; i < crossButtons.length; i++) {
	crossButtons[i].addEventListener("click", xOut);
	console.log(crossButtons);
 }
}

function xOut(){
	this.parentNode.style.setProperty("text-decoration", "line-through");
	
	
	
}





