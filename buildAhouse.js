background(219, 255, 255);

fill(61, 64, 84);
triangle(198, 89, 396, 150, 4, 150); //roof

fill(255, 255, 255);
rect(60, 150, 280, 207); //house

for(var brick = 2; brick < 13; brick++) {
    for( var bricks = 10; bricks < 24; bricks++) {
        strokeWeight(3);
        fill(196, 165, 143);
        rect(brick * 27, bricks * 15, 25, 10);
       
}
}
for(var win = 1; win < 4; win++){  //windows
    fill(161, 209, 212);
    rect(win *87, 172, 47, 22);   
}

stroke(2);
strokeWeight(3);
fill(255, 255, 255);
rect(200, 280, 40, 77); //doors
fill(255, 255, 255);
rect(157, 280, 40, 77);

strokeWeight(6);
point(188,321);
point(213,321);

     
     
    noStroke();
    fill(125, 117, 84);
    rect (364, 224, 14, 143);     
     noStroke();
    fill(125, 117, 84);
    rect (22, 224, 14, 143);

var grass = getImage("cute/GrassBlock");

var x = -1;
while(x < 400) {
image(grass, x, 308);
x += 96;

}



var tree = getImage("cute/TreeUgly");

var y = -25;
while(y < 399)  {
image(tree, y, 91);
y += 344;
}



