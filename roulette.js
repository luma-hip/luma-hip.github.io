var x = 0;
var x1 = 0;
var scale = 1.0;
var randomnumber1 = 1;
var randomnumber2 = 1;
var start = false;
var reset = false;
var clara = false;
var fred = false;
var G5 = false;
var G10 = false;

//button
function button(a, y, r, g, b) {
  fill(r, g, b);
  rect(a + 20, y + 20, 80, 50, 20);
}

function mousePressed() {
  while (randomnumber1 === randomnumber2) {
    randomnumber1 = Math.floor(random(2, 4));
    randomnumber2 = Math.floor(random(2, 4));
  }

  if (mouseX > 20 && mouseX < 100 && mouseY > 20 && mouseY < 70) {
    start = true;
  }

  if (mouseX > 20 && mouseX < 100 && mouseY > 80 && mouseY < 130) {
    reset = true;
  }

  if (mouseX > 20 && mouseX < 200 && mouseY > 20 && mouseY < 70) {
    clara = true;
  }

  if (mouseX > 120 && mouseX < 200 && mouseY > 80 && mouseY < 130) {
    fred = true;
  }

  if (mouseX > 220 && mouseX < 300 && mouseY > 20 && mouseY < 70) {
    G5 = true;
  }

  if (mouseX > 220 && mouseX < 300 && mouseY > 80 && mouseY < 130) {
    G10 = true;
  }
}

//Fred
function schnecke1(x, scale) {
  stroke(100, 200, 250); //Haus
  strokeWeight(3 * scale);
  fill(126, 192, 238);
  ellipse(x + 45 * scale, 370 * scale, 85 * scale, 80 * scale);
  noStroke(); //Körper
  fill(255, 239, 213);
  rect(x + 0 * scale, 400 * scale, 120 * scale, 25 * scale, 30 * scale);
  stroke(255, 239, 213);
  line(x + 110 * scale, 400 * scale, x + 125 * scale, 365 * scale); //Augen
  line(x + 105 * scale, 400 * scale, x + 120 * scale, 360 * scale);
}

//Clara
function schnecke2(x1, scale) {
  stroke(250, 200, 250); //Haus
  strokeWeight(3 * scale);
  fill(255, 130, 171);
  ellipse(x1 + 45 * scale, 490 * scale, 85 * scale, 80 * scale);
  noStroke(); //Körper
  fill(255, 239, 213);
  rect(x1 + 0 * scale, 520 * scale, 120 * scale, 25 * scale, 30 * scale);
  stroke(255, 239, 213);
  line(x1 + 110 * scale, 530 * scale, x1 + 125 * scale, 485 * scale); //Augen
  line(x1 + 105 * scale, 530 * scale, x1 + 120 * scale, 480 * scale);
}

function draw() {
  clear();
  var startColor = color(135, 206, 250);
  var endColor = color(198, 226, 255);
  for (var i = 0; i < height; i = i + 1) {
    r = red(startColor) + ((red(endColor) - red(startColor)) / height) * i;
    g =
      green(startColor) + ((green(endColor) - green(startColor)) / height) * i;
    b = blue(startColor) + ((blue(endColor) - blue(startColor)) / height) * i;
    stroke(r, g, b);
    line(0, i, width - 1, i);
  }
  noStroke();
  fill(0, 205, 102); //Grasfläche
  rect(0, 350, 800, 400);
  //Grasbüschel
  triangle(200, 300, 200, 350, 210, 350);
  triangle(220, 330, 200, 350, 210, 350);
  triangle(400, 300, 400, 350, 410, 350);
  triangle(390, 330, 400, 350, 410, 350);
  triangle(90, 300, 90, 350, 100, 350);
  triangle(110, 330, 90, 350, 100, 350);
  triangle(70, 330, 100, 350, 90, 350);

  //Ziel
  stroke(0, 0, 0);
  strokeWeight(3);
  fill(255, 255, 255);
  rect(500, 350, 100, 300);

  //Flagge
  line(550, 150, 550, 350);
  noStroke();
  fill(230, 230, 230);
  rect(450, 150, 99, 150);
  fill(0, 0, 0);
  textFont("Impact");
  textSize(30);
  text(" Z\n  I\n  E\n  L ", 480, 180);

  //Rennstrecke
  fill(200, 200, 200);
  rect(100, 380, 399, 190);
  fill(0, 0, 0);
  stroke(0, 0, 0);
  line(100, 470, 500, 470);

  button(0, 0, 250, 250, 250); //Startbutton
  textSize(25);
  text("Start", 35, 55);
  button(100, 0, 255, 130, 171); //buttonClara
  fill(255, 255, 255);
  text("Clara", 133, 55);
  button(100, 60, 126, 192, 238); //buttonFred
  fill(255, 255, 255);
  text("Fred", 140, 115);
  button(0, 60, 250, 250, 250); //Resetbutton
  text("Reset", 30, 115);
  button(200, 0, 155, 205, 155); //5€
  fill(255, 255, 255);
  text("5€", 250, 55);
  button(200, 60, 205, 92, 92); //10€
  fill(255, 255, 255);
  text("10€", 245, 115);

  //Wette
  if (clara == true && fred == false) {
    fill(50, 50, 50);
    textSize(50);
    text("C  l  a  r  a", 200, 540);
  }

  if (fred == true) {
    fill(50, 50, 50);
    textSize(50);
    text("F  r  e  d", 200, 440);
  }

  //Animation Schnecken
  schnecke1(x + 1, 1.0);
  schnecke2(x1 + 1, 1.0);
  if (start == true) {
    x = x + randomnumber1;
    x1 = x1 + randomnumber2;
  }

  //Position Stop
  if (x >= 550) {
    x = 550;
  }
  if (x1 >= 550) {
    x1 = 550;
  }

  //Einsatz
  if (G5 == true && G10 == false) {
    button(200, 0, 155, 205, 155);
    fill(200, 200, 50);
    textSize(25);
    text("5€", 250, 55);
  }

  if (G10 == true) {
    button(200, 60, 205, 92, 92);
    fill(255, 25, 25);
    textSize(25);
    text("10€", 245, 115);
  }

  //Gewinner
  if (randomnumber1 > randomnumber2 && start == true) {
    fill(0, 0, 0);
    textSize(40);
    text("Fred  is  Winner !", 100, 250);
  } else if (randomnumber2 > randomnumber1 && start == true) {
    fill(0, 0, 0);
    textSize(40);
    text("Clara  is  Winner !", 100, 250);
  }

  //Wette
  if (fred == true && G5 == true) {
    console.log("Du setzt 5€ auf Fred");
  }

  if (clara == true && G5 == true) {
    console.log("Du setzt 5€ auf Clara");
  }

  if (fred == true && G10 == true) {
    console.log("Du setzt 10€ auf Fred");
  }

  if (clara == true && G10 == true) {
    console.log("Du setzt 10€ auf Clara");
  }

  //Gewinn
  if (
    randomnumber1 > randomnumber2 &&
    start == true &&
    fred == true &&
    G5 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast gewonnen! Du erhältst 10€!", 380, 50);
  } else if (
    randomnumber1 > randomnumber2 &&
    start == true &&
    fred == false &&
    G5 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast verloren! Du verlierst 5€", 380, 50);
  }

  if (
    randomnumber1 > randomnumber2 &&
    start == true &&
    fred == true &&
    G10 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast gewonnen! Du erhältst 20€!", 380, 50);
  } else if (
    randomnumber1 > randomnumber2 &&
    start == true &&
    fred == false &&
    G10 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast verloren! Du verlierst 10€", 380, 50);
  }

  if (
    randomnumber1 < randomnumber2 &&
    start == true &&
    clara == true &&
    G5 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast gewonnen! Du erhältst 10€!", 380, 50);
  } else if (
    randomnumber1 < randomnumber2 &&
    start == true &&
    clara == false &&
    G5 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast verloren! Du verlierst 5€", 380, 50);
  }

  if (
    randomnumber1 < randomnumber2 &&
    start == true &&
    clara == true &&
    G10 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast gewonnen! Du erhältst 20€!", 380, 50);
  } else if (
    randomnumber1 < randomnumber2 &&
    start == true &&
    clara == false &&
    G10 == true
  ) {
    fill(0, 0, 0);
    textSize(20);
    text("Du hast verloren! Du verlierst 10€", 380, 50);
  }

  //Reset
  if (reset == true) {
    x = 0;
    x1 = 0;
    noStroke();
    fill(200, 200, 200);
    rect(190, 390, 160, 60);
    rect(190, 490, 200, 60);
    fill(135, 206, 250);
    rect(370, 30, 310, 30);
    fill(165, 210, 255);
    rect(100, 215, 290, 40);
  }
}
