let value = "orange"
function setup(){
    createCanvas(1000,700)
}
var b = 3
var a = 2;
fillColor = "yellow"
fillColor2 = "orange"
let pkHp1 = 100
let pkHp2 = 100
var ellipseX = 350
var ellipseDiameter = 300
var sL = 50
fill1 = "black"
fill2 = "black"
fill3 = "black"
fillg = "grey"
filly = "yellow"
fillr = "red"
fillo = "orange"
var s = 0
var b = 2
black = (66, 227, 245)
pTurn1 = 1
pTurn2 = 0
var pk2Hp = 100
function home(){
    background(66, 227, 245)
        strokeWeight(1)
        stroke(1)
        fill("green")
        rect(0,500,1000,200)
        strokeWeight(4)
        stroke(0)
        fill(101,67,33)
        rect(100,200,100,300)
        strokeWeight(4)
        stroke(0)
        fill("dark blue")
        rect(100,300,100,200)
        rect(100,310,50,100)
        strokeWeight(4)
        stroke(1)
        fill(filly)
        rect (250, 400, 100, 100)
        strokeWeight(4)
        stroke(0)
        fill("red")
        rect(550,550,200,150);
        strokeWeight(4)
        stroke(0)
        fill("blue")
        rect(750,550,200,150);
        rect(250,550,200,150);
        strokeWeight(4)
        stroke(0)
        fill("red")
        rect(50,550,200,150);
        strokeWeight(4)
        stroke(0)
        fill("blue")
        rect(800, 100, 200, 400)
        strokeWeight(1)
        stroke(1)
        fill(fillg)
        rect(600, 275, 100, 10)
        strokeWeight(1)
        stroke(1)
        fill("grey")
        rect(250, 275, 100, 10)
        strokeWeight(1)
        stroke(1)
        fill(88, 199, 60)
        rect(600, 275, pkHp2, 10)
        rect(250, 275, pkHp1, 10)
        strokeWeight(4)
        stroke(0)
        fill("blue")
        rect(100,400,50,50)
        strokeWeight(4)
        stroke(0)
        fill(fillo)
        rect(600, 300, 100,200)
        strokeWeight(4)
        stroke(0)
        fill(101,67,33)
        rect(100,400,50,50)
        strokeWeight(4)
        stroke(0)
        fill(fillColor)
        strokeWeight(4)
        stroke(0)
        rect(50,500,400,sL)
        strokeWeight(4)
        stroke(0)
        fill(fillColor2)
        rect(550,500,400,sL)
        strokeWeight(1)
        stroke(1)
        fill(fill1);
        textSize(25);
        text("Deal 10 Dmg", 580,625);
        strokeWeight(1)
        stroke(1)
        textSize(18)
        text("Deal random Dmg 1-20", 760, 625);
        strokeWeight(1)
        stroke(1) 
        fill(fill2)
        textSize(25);
        text("Deal 10 Dmg",80,625 );
        strokeWeight(1)
        stroke(1)
        textSize(18)
        text("Deal random Dmg 1-20", 260, 625);
        strokeWeight(2)
        stroke(1)
        fill("red")
        rect(1,1,100,175)
        rect(5,65, 90, 100)
        fill("yellow")
        triangle(14, 90, 14, 75, 29, 83)
        fill("white")
        ellipse(20,20, 20)
        fill("blue")
        ellipse(20,20,10)
        fill("red")
        ellipse(40, 10,6)
        console.log( pkHp1, pkHp2)
}
function draw(){
if(a == 2){
    home()
}
else if(b == 2){
    background(66, 227, 245)
    strokeWeight(4)
    stroke(1)
    fill(66, 227, 245)
    ellipse(ellipseX, 350, 3000)
    fill("grey")
    ellipse(500, 500, 900)
    fill("yellow")
    rect (250, 400, 100, 100)
    fill("black")
    rect(0,500, 1000, 200)
    strokeWeight(2)
    stroke(1)
    fill("red")
    rect(1,1,100,175)
    rect(5,65, 90, 100)
    fill("yellow")
    triangle(14, 90, 14, 75, 29, 83)
    fill("white")
    ellipse(20,20, 20)
    fill("blue")
    ellipse(20,20,10)
    fill("red")
    ellipse(40, 10,6)
    fill("white")
    rect(900, 0, 100,200)
    }
    else if (b = 3){
        fill("white")
        rect(0,0,1000,300)
        strokeWeight(4)
        stroke(1)
        fill("red")
        rect(3,0,203,200)
        strokeWeight(4)
        stroke(0)
        fill("white")
        rect(0, 300, 1000,300)
        strokeWeight(4)
        stroke(1)
        fill("yellow")
        rect(3, 300,203, 200)


    }
    else if (b == 4){
        clear()
        a=2
    }
}
function mouseClicked(){
    if(pkHp2 > 0 && pkHp1 > 0){
        if(pTurn1 == 1) {
            if(mouseX > 100 && mouseX < 250 ){
                if(mouseY > 525 && mouseY < 675){
                    if(pkHp2>0){
                    pkHp2 = pkHp2 - 10
                    pTurn1 = 0
                    pTurn2 = 1
                }
            }
        }
      }
        if(pTurn1 == 1) {
            if(mouseX > 250 && mouseX < 500) {
                if(mouseY > 525 && mouseY < 675) {
                    if(pkHp2 > 0) {
                        pkHp2 = pkHp2 - Math.floor(Math.random()*21);
                        pTurn1 = 0;
                        pTurn2 = 1;
                            if(pkHp2 < 0) {
                                pkHp2 = 0
                        }
                    }
                }
          }
      }
     
      if(pTurn2 == 1) {
        if(mouseX > 550 && mouseX < 700) {
            if(mouseY > 525 && mouseY < 675){
                if(pkHp1>0){
                 pkHp1 = pkHp1 - 10
                 pTurn1 = 1;
                 pTurn2 = 0;
                }
            }
        }
      }
     
      if(pTurn2 == 1) {
        if(mouseX > 750 && mouseX < 900) {
            if(mouseY > 525 && mouseY < 675) {
                if(pkHp1 > 0) {
                    pkHp1 = pkHp1 - Math.floor(Math.random()*21);
                        if(pkHp1 < 0) {
                            pkHp1 = 0
                            pTurn1 = 1;
                            pTurn2 = 0;
                      }
                    }
                }
          }
      }
    }
    else if (pkHp2 <= 0){
        pkHp1 = 100
        fill("black")
    }
        if(mouseX > 0 && mouseX < 100){
            if(mouseY > 0 && mouseY < 100){
                a = clear()
                s = 4
            }
        }
    else if (pkHp1 <= 0){
    }
    if(mouseX > 0 && mouseX < 100){
        if(mouseY > 0 && mouseY < 100){
            a = clear()
        }

} 
 if(a==clear()){
     black = "black"
    if (mouseX < 150 && mouseX > 50 ){
        if (mouseY > 0 && mouseY < 120){
            a = 2
 }
}
        else if(mouseX > 900){
            if (mouseY < 201){
                b = 3
            }
        }
        else if(mouseX > 250 && mouseX < 350){
            b = 4
            filly = "red"
            pkHp1 = pk2Hp
}
}
}
