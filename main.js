var canvas = document.getElementById("Cava");
var ctx = canvas.getContext("2d");


var heightCar = 100;
var widthCar = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX = 5;
carY = 225;

function add() {
	background_img = new Image();
	background_img.onload = uploadBackground;
	background_img.src = background_image;
	car_img = new Image();
	car_img.onload = uploadgreencar;
	car_img.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_img,carX,carY,widthCar,heightCar);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == 38)
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == "40")
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == "37")
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == 39)
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (carY >= 0){
		carY =carY -10;
		console.log("when up arrow click X = "  + carX +" Y = " + carY);
		uploadBackground();
		uploadgreencar();

	}
}

function down()
{
	if (carY <= 500){
		carY =carY +10;
		console.log("when down arrow click X = "  + carX +" Y = " + carY);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (carX > 0){
		carX =carX -10;
		console.log("when left arrow click X = "  + carX +" Y = " + carY);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (carX < 700){
		carX =carX +10;
		console.log("when right arrow click X = "  + carX +" Y = " + carY);
		uploadBackground();
		uploadgreencar();
	}
}
