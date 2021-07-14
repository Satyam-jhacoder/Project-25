var canvas;
var music;
var box;
var base1, base2, base3, base4;
var egdes;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box = createSprite(400,110,20,20);
     box.shapeColor = "purple"
     box.velocityX = 4;
     box.velocityY = -5;
     box.scale = 2;

     base1 = createSprite(0,580,360,30);
     base1.shapeColor = "Green"

     base2 = createSprite(295,580,200,30);
     base2.shapeColor = "orange"
         
     base3 = createSprite(515,580,200,30);
     base3.shapeColor = "red "
     
     base4 = createSprite(740,580,200,30);
     base4.shapeColor = "blue"
    


    //create box sprite and give velocity
           
}

function draw() {
    background ("Yellow")
    //create edgeSprite
      edges = createEdgeSprites();
          box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(box.isTouching(base1) && box.bounceOff(base1)){
        box.shapeColor = "Green"
    }

    if(box.isTouching(base2)){
        box.shapeColor = "orange"
        box.velocityX = 0;
        box.velocityY = 0;
    }
   
    if(box.isTouching(base3) && box.bounceOff(base3)){
        box.shapeColor = "red"

    }
        
    if(box.isTouching(base4) && box.bounceOff(base4)){
        box.shapeColor = "blue"
    }
   
    drawSprites();
}
