//Create BHT value

var totalMiles = document.getElementById("totalmiles");
var totalElevation = document.getElementById("totalelevation");



function calculateBaseHikeTime(miles, elevation){
  	
	console.log("Calculating time...")
	console.log(miles.value) * (elevation.value);

};

calculateBaseHikeTime(totalMiles, totalElevation);


//set totalelevation focus to calculateBaseHikeTime function