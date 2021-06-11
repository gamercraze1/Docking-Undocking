var ISS_Image, spacecraft1_Image, spacecraft2_Image, spacecraft3_Image, spacecraft4_Image, space_Image, background_Image
var ISS, spaceCraft, shuttleState = 0, blinking=0;

function preload(){
  ISS_Image = loadImage("Docking-undocking/iss.png");
  spacecraft1_Image = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2_Image = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3_Image = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4_Image = loadImage("Docking-undocking/spacecraft4.png");
  background_Image = loadImage("Docking-undocking/spacebg.jpg");
}

function setup() {

  createCanvas(800,400);
  ISS = createSprite(200, 100, 50, 50);
  ISS.addImage(ISS_Image)
  ISS.scale = 0.3
  spaceCraft = createSprite(750,325,20,20)
  spaceCraft.addImage(spacecraft1_Image);
  spaceCraft.scale = 0.12
}

function draw() {
  background(background_Image);  

  textSize(25);
fill("red");
text("!Move tip to blinking point and press space to initiate docking!",20,380)

if(shuttleState===0|| shuttleState === 1){

if(keyIsDown(38)){
spaceCraft.y = spaceCraft.y -10
spaceCraft.addImage(spacecraft2_Image);
shuttleState=1
}else{
  spaceCraft.addImage(spacecraft1_Image);
  shuttleState=0
}
}
if(shuttleState===0|| shuttleState === 2){

if(keyIsDown(40)){
  spaceCraft.y = spaceCraft.y +10
  shuttleState = 2
}else{
  spaceCraft.addImage(spacecraft1_Image);
  shuttleState=0
}
}


if(shuttleState===0|| shuttleState === 3){

if(keyIsDown(37)){
  spaceCraft.x = spaceCraft.x -10
  spaceCraft.addImage(spacecraft4_Image)
  shuttleState = 3
}else{
  spaceCraft.addImage(spacecraft1_Image);
  shuttleState=0
}}


if(shuttleState===0|| shuttleState === 4){

if(keyIsDown(39)){
  spaceCraft.x = spaceCraft.x +10
  spaceCraft.addImage(spacecraft3_Image)
  shuttleState=3
}else{
  spaceCraft.addImage(spacecraft1_Image);
  shuttleState=0
}

}
if(spaceCraft.x<=185&&spaceCraft.x>=177&&spaceCraft.y<=140&&spaceCraft.y>=123){
if(keyIsDown(32)){
  shuttleState=5
}

}
if(shuttleState===5){
  textSize(30);
fill("red");
text("!DOCKING SUCCESFUL!",300,200)


}


  drawSprites();
  if(frameCount%10===0){
    if(blinking===0){
      fill("cyan");
    circle(182,115,12)
      blinking=1;
    }
    if(blinking===1){
      fill("cyan");
      circle(182,115,12)
        blinking=0;
    }
  
  }
}