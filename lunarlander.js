let x = 0;
let y = 0;
let scale = 1.0;
let help = false;
let spruch = "";
let xR = 0;
let yR = 0;
let start = false;
let reset = false;
let winkel = 0;
let xA = 0;
let yA = 0;
let Gewonnen = false;
let Verloren = false;
let Speed = 0;

function Erde(x, y) {
  noStroke();
  fill(0, 191, 255);
  ellipse(x, y, 70); //Erde
  fill(0, 139, 0);
  ellipse(440, 140, 23, 25); //asien
  ellipse(429, 140, 23, 25);
  ellipse(432, 131, 21, 15);
  ellipse(440, 140, 23, 25);
  ellipse(444, 131, 23, 15);
  ellipse(427, 145, 23, 25);
  ellipse(440, 155, 13, 15);
  ellipse(435, 160, 13, 15);
  ellipse(466, 170, 13, 10); //australien
  ellipse(460, 170, 13, 10);
  ellipse(460, 173, 23, 15);
  ellipse(470, 170, 13, 15);
}

//mond
function Mond() {
  fill(245, 245, 220);
  ellipse(350, 900, 1000);
  fill(205, 205, 180, 70);
  ellipse(200, 600, 100);
  ellipse(300, 500, 30);
  ellipse(650, 640, 60);
  ellipse(500, 550, 80);
  ellipse(100, 650, 20);
  ellipse(600, 610, 20);
  ellipse(400, 650, 20);
  stroke(245, 245, 220);
  strokeWeight(30);
  line(50, 500, 120, 460);
  line(230, 415, 300, 405);
  line(440, 410, 560, 450);
  line(690, 530, 730, 570);
}

//Sterne
function Stern1(x, y) {
  noStroke();
  fill(255, 255, 255);
  triangle(x + 99, y + 100, x + 100, y + 90, x + 101, y + 100);
  triangle(x + 99, y + 100, x + 100, y + 110, x + 101, y + 100);
  triangle(x + 99, y + 99, x + 90, y + 100, x + 99, y + 101);
  triangle(x + 100, y + 99, x + 110, y + 100, x + 100, y + 101);
  fill(255, 255, 255, 30);
  ellipse(x + 100, y + 100, 10);
}
function stars(x, y, scale) {
  fill(255, 255, 255);
  noStroke();
  ellipse(x - 100 * scale, y - 180 * scale, 2 * scale);
  ellipse(x - 150 * scale, y - 210 * scale, 1 * scale);
  ellipse(x - 180 * scale, y - 160 * scale, 2 * scale);
  ellipse(x - 230 * scale, y - 190 * scale, 2 * scale);
  ellipse(x - 270 * scale, y - 160 * scale, 1 * scale);
  ellipse(x - 180 * scale, y - 190 * scale, 1 * scale);
  ellipse(x - 250 * scale, y - 220 * scale, 1 * scale);
  ellipse(x - 200 * scale, y - 230 * scale, 1 * scale);
}

//Button
function Button(x, y) {
  stroke(255, 255, 255);
  fill(255, 255, 255, 60);
  rect(x, y, 80, 30, 10);
}

//Raumschiff
function Raumschiff(xR, yR) {
  noStroke();
  fill(150, 150, 150);
  triangle(xR + 225, yR + 220, xR + 235, yR + 200, xR + 245, yR + 220);
  triangle(xR + 255, yR + 220, xR + 265, yR + 200, xR + 275, yR + 220);
  fill(240, 240, 240);
  ellipse(xR + 250, yR + 150, 60);
  rect(xR + 220, yR + 150, 60, 60);
  stroke(204, 204, 204);
  strokeWeight(2);
  fill(220, 220, 220);
  ellipse(xR + 250, yR + 160, 20);
  triangle(xR + 220, yR + 150, xR + 220, yR + 190, xR + 205, yR + 190);
  triangle(xR + 280, yR + 150, xR + 280, yR + 190, xR + 295, yR + 190);
  line(xR + 250, yR + 90, xR + 250, yR + 120);
  noStroke();
  fill(255, 0, 0);
  ellipse(xR + 250, yR + 100, 5);
  ellipse(xR + 250, yR + 110, 5);
}

//AstronautGewonnen
function Astronaut1(xA, yA) {
  fill(250, 250, 250);
  rect(xA + 405, yA + 460, 90, 10, 30);
  rect(xA + 435, yA + 460, 30, 30, 20);
  ellipse(xA + 450, yA + 450, 30);
  rect(xA + 435, yA + 470, 30, 30, 10);
  rect(xA + 435, yA + 490, 12, 40, 10);
  rect(xA + 453, yA + 490, 12, 40, 10);
  stroke(40, 40, 40);
  strokeWeight(0.3);
  line(xA + 435, yA + 487, xA + 465, yA + 487);
  line(xA + 435, yA + 500, xA + 465, yA + 500);
  line(xA + 435, yA + 510, xA + 446, yA + 510);
  line(xA + 435, yA + 520, xA + 446, yA + 520);
  line(xA + 453, yA + 510, xA + 464, yA + 510);
  line(xA + 453, yA + 520, xA + 464, yA + 520);
  line(xA + 427, yA + 460, xA + 427, yA + 470);
  line(xA + 417, yA + 460, xA + 417, yA + 470);
  line(xA + 472, yA + 460, xA + 472, yA + 470);
  line(xA + 482, yA + 460, xA + 482, yA + 470);
  strokeWeight(2);
  fill(255, 239, 213);
  ellipse(xA + 450, yA + 450, 15);
  stroke(16, 78, 139);
  fill(79, 148, 205);
  ellipse(xA + 458, yA + 470, 6);
  //Flagge
  stroke(0, 0, 0);
  line(xA + 500, yA + 430, xA + 500, yA + 490);
  noStroke();
  rect(xA + 501, yA + 430, 40, 40);
  fill(0, 0, 0);
  textSize(7);
  text("YOU WIN", xA + 505, yA + 450);
}

//AstronautVerloren
function Astronaut2(xA, yA) {
  fill(250, 250, 250);
  rect(xA + 312, yA + 555, 10, 90, 30);
  rect(xA + 318, yA + 585, 30, 30, 10);
  ellipse(xA + 300, yA + 600, 30);
  rect(xA + 330, yA + 585, 30, 30, 10);
  rect(xA + 353, yA + 585, 40, 12, 10);
  rect(xA + 353, yA + 603, 40, 12, 10);
  stroke(40, 40, 40);
  strokeWeight(0.3);
  line(xA + 345, yA + 585, xA + 345, yA + 615);
  line(xA + 360, yA + 585, xA + 360, yA + 615);
  line(xA + 370, yA + 585, xA + 370, yA + 597);
  line(xA + 370, yA + 603, xA + 370, yA + 615);
  line(xA + 380, yA + 585, xA + 380, yA + 597);
  line(xA + 380, yA + 603, xA + 380, yA + 615);
  line(xA + 312, yA + 580, xA + 323, yA + 580);
  line(xA + 312, yA + 570, xA + 323, yA + 570);
  line(xA + 312, yA + 620, xA + 323, yA + 620);
  line(xA + 312, yA + 630, xA + 323, yA + 630);
  strokeWeight(2);
  fill(255, 239, 213);
  ellipse(xA + 300, yA + 600, 15);
  strokeWeight(0.8);
  line(xA + 295, yA + 605, xA + 298, yA + 597);
  line(xA + 301, yA + 602, xA + 298, yA + 597);
  line(xA + 301, yA + 602, xA + 305, yA + 597);
  stroke(16, 78, 139);
  strokeWeight(2);
  fill(79, 148, 205);
  ellipse(xA + 325, yA + 595, 6);
  //Flagge
  stroke(0, 0, 0);
  line(xA + 280, yA + 555, xA + 350, yA + 555);
  noStroke();
  rect(xA + 280, yA + 514, 50, 40);
  fill(0, 0, 0);
  textSize(7);
  text("YOU LOOSE", xA + 285, yA + 540);
}

function mousePressed() {
  if (mouseX > 620 && mouseX < 700 && mouseY > 20 && mouseY < 50) {
    help = true;
  }
  if (help == true) {
    spruch =
      " Willkommen beim Lunar Lander,\n sobald du den Start Button drückst startet das Spiel und die Rakete bewegt sich nach unten.\n Ziel des Spiels ist es eine sanfte Landung mit einer Geschwindigkeit <2 zu erzielen\n Nutze hierfür die Pfeiltasten. Aber Vorsicht gib acht vor den Bergen des Mondes! ";
    console.log(spruch);
  }
  if (mouseX > 620 && mouseX < 700 && mouseY > 60 && mouseY < 90) {
    start = true;
  }
  if (mouseX > 620 && mouseX < 700 && mouseY > 100 && mouseY < 130) {
    reset = true;
  }
  if (reset == true) {
    Gewonnen = false;
    Verloren = false;
    yR = 0;
    xR = 0;
    Speed = 0;
  }
}

function draw() {
  clear();
  background(0, 0, 0);
  strokeWeight(1);
  Button(620, 20); //Help
  textSize(17);
  textFont("Futura");
  text("H E L P", 635, 42);

  Button(620, 60); //Start
  text("S T A R T", 625, 82);

  Button(620, 100); //Reset
  text("R E S E T", 625, 122);

  Button(620, 140); //Speed
  fill(255, 25, 25);
  noStroke();
  text(Speed, 630, 162);

  //GroßerWagen
  Stern1(0, 0);
  Stern1(50, -40);
  Stern1(100, -35);
  Stern1(140, -30);
  Stern1(200, 5);
  Stern1(270, -10);
  Stern1(270, -90);
  //Sternenhimmel
  stars(500, 300, 1.0);
  stars(300, 240, 1.0);
  stars(350, 350, 1.0);
  stars(500, 300, 1.0);
  stars(500, 450, 1.0);
  stars(300, 400, 1.0);
  stars(300, 500, 1.0);
  stars(280, 600, 1.0);
  stars(220, 350, 1.0);
  stars(250, 670, 1.0);
  stars(470, 200, 1.0);
  stars(700, 200, 1.0);
  stars(700, 500, 1.0);
  stars(480, 560, 1.0);
  stars(600, 400, 1.0);
  stars(700, 300, 1.0);
  stars(800, 400, 1.0);
  stars(770, 600, 1.0);
  stars(900, 200, 1.0);
  stars(900, 700, 1.0);
  stars(900, 500, 1.0);
  stars(900, 300, 1.0);

  Erde(450, 150, 70);
  Mond();

  Raumschiff(xR, yR);
  //AnimationRaumschiff
  if (start == true) {
    Speed = 2;
    yR = yR + Speed;
    help = false;
  }
  if (yR >= 300) {
    yR = 300;
    start = false;
  }
  if (keyIsDown(37)) {
    xR = xR - 1;
  }
  if (keyIsDown(39)) {
    xR = xR + 1;
  }
  //hoch
  if (keyIsDown(38)) {
    Speed = -3.5;
    yR = yR + Speed;
  }
  //runter
  if (keyIsDown(40)) {
    Speed = +0.5;
    yR = yR + Speed;
  }

  //Gewonnen|Verloren
  if (Gewonnen == true) {
    Astronaut1(0, 0);
  }
  if (Verloren == true) {
    Astronaut2(0, 0);
  }

  //Landung
  if (Speed >= 2 && yR >= 300) {
    Verloren = true;
  } else if (Speed <= 2 && yR >= 300) {
    Gewonnen = true;
  }

  //Todeszonen

  if (xR >= -190 && xR <= -140 && yR >= 250) {
    Verloren = true;
    yR = 250;
  }
  if (xR >= -40 && xR <= 90 && yR >= 175) {
    Verloren = true;
    yR = 175;
  }
  if (xR >= 160 && xR <= 340 && yR >= 200) {
    Verloren = true;
    yR = 200;
  }
  if (xR >= 430 && xR <= 530 && yR >= 300) {
    Verloren = true;
    yR = 300;
  }
}
