
function change1(){
	document.getElementById("M1").classList.remove("hide");
	document.getElementById("M2").classList.add("hide");
	document.getElementById("MMM").classList.remove("clicked")
	document.getElementById("MM").classList.add("clicked");
}

function change2(){
	document.getElementById("M2").classList.remove("hide");
	document.getElementById("M1").classList.add("hide");
	document.getElementById("MM").classList.remove("clicked")
	document.getElementById("MMM").classList.add("clicked");
}