function setup(){
    canvas=createCanvas(500,500);
    canvas.position(830,150);
    video=createCapture(VIDEO);
    video.size(550,550);
    video.position(250,150);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("#fac941");
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
    }
}
