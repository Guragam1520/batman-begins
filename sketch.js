const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var maxdrops=100;
var umbrella;
var thunderBolt1, thunderBolt2, thunderBolt3, thunderBolt4;
var world,engine,body,bodies;

function preload(){
umbrella=loadImage("Walking Frame/walking_1.png");
thunderBolt1=loadImage("thunderbolt/1.png");
thunderBolt2=loadImage("thunderbolt/2.png");
thunderBolt3=loadImage("thunderbolt/3.png");
thunderBolt4=loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(400,400);
    maxdrops=new Drop(150,300,20,20);
    umbrella=new Umbrella(200,380,40,40);
    engine=Engine.create();
    world=engine.world();       
   
    
}

function draw(){
    engine.update();
    for(var i; i<maxdrops;i++){
        drops.push(new createDrop(random(0,400),random0,400));

    }
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:(0,400)});
        if(frameCount===20){
            maxdrops.display();
        }
    }
    
}   

