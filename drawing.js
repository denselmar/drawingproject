  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');

//background
  canvas.fillStyle = "skyblue";
  canvas.fillRect(0,0,1500,800);

//base of house
canvas.fillStyle = "darkgray";
canvas.fillRect(0, 400, 400, 400);

//window
canvas.fillStyle = "lightgray";
canvas.fillRect(10, 450, 180, 100);

//window lining vertical


canvas.fillStyle = "white";
canvas.fillRect(90, 450, 10, 100);

//window lining horizontal
canvas.fillStyle = "biege";
canvas.fillRect(400, 450, 450, 800);

canvas.fillStyle = "skyblue";
canvas.fillRect(425,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(450,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(475,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(500,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(525,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(550,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(575,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(600,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(625,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(650,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(675,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(700,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(725,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(750,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(775,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(800,430,10,300);

canvas.fillStyle = "skyblue";
canvas.fillRect(825,430,10,300);
//sun
canvas.fillStyle = "yellow";
canvas.beginPath();
canvas.arc(700, 20, 100, 0, 2*Math.PI);
canvas.fill();

//grass
canvas.fillStyle = "green";
canvas.fillRect(0, 600, 1500, 800);

//chimney
canvas.fillStyle = "brown";
canvas.fillRect(0, 200, 100, 200);

//roof
canvas.fillStyle = "gray";
canvas.beginPath();
canvas.moveTo(200,200);
canvas.lineTo(0,400);
canvas.lineTo(400,400);
canvas.fill();

//door
//canvas.fillStyle = "black";
//canvas.fillRect = ()



///////////////////////////////////////////////////car////////////////////////
canvas.beginPath();
canvas.fillStyle = "red";
canvas.arc(1000,525,85,0,Math.PI,true);
canvas.fill();
canvas.fillRect(900,525,205,40);

//wheels

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(950,575,30,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(1060,575,30,0,2*Math.PI,true);
canvas.fill();



canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(950,575,10,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(1060,575,10,0,2*Math.PI,true);
canvas.fill();

////windows//
canvas.beginPath();
canvas.fillStyle = "blue";
canvas.moveTo(950,500);
canvas.lineTo(900,526);
canvas.lineTo(950,430);
canvas.fill();
