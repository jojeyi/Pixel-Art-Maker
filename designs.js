// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//The make grid function created nested inside the submit event handler
$("#sizePicker").submit(function makeGrid(event){

	$("#pixelCanvas tr").remove();   //Removes previous canvas

	event.preventDefault();		//prevents the default action of a form being submitted

	let height = $("#inputHeight").val();	//Height of the grid is set to the value of the first input element
	let width = $("#inputWeight").val();	//Weight of the grid is set to the value of the first input element

//for loop iterates through the input values for grid height
	for(let i = 1; i <= height; i++) {
		$("#pixelCanvas").append("<tr></tr>");			

	//for loop iterates through the input values for grid width
		for(let i = 1; i <= width; i++) {
			$("tr:last").append("<td></td>");	
	
		}
	}

//This code toggles the event of clicking on the grid cell with a selected color on and off
	$("td").click(function(event){
		let colorPicker = $("#colorPicker").val();
		let c = event.target.c = !event.target.c;    
  		$(event.target).css({ "background-color": c ? colorPicker: "#fff" });  
	});


});



	 
	



	