let arrow = ["nuetral", "Go-Left", "Go-Right"];

//Add an event listener to listen for a mouseclick anywhere on the page
document.addEventListener("click", function() {
	//each time the screen is clicked, a random number between 1 and 2
	//will be assigned to the indexNumber variable
	let indexNumber = Math.floor((Math.random() * 2) + 1);
	//each time the screen is clicked, the following element will be inserted into the DOM
	//the element will use the random number as an index number for the arrow array
	//the first and second index will serve as different classes for the inserted div element
	document.getElementById("arrow-goes-here").innerHTML = `<div class="${arrow[indexNumber]}"></div>`;
})
