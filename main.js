noseX=0;
nosey=0;

difference=0;

RwristX=0;
LwristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(1050,700);
canvas.position(560,150);
PoseNet=ml5.poseNet(video,modelloaded);
PoseNet.on("pose",gotposes);

}
function modelloaded(){
console.log("posenet has started.")
}
function draw(){
    background("#fff");
    document.getElementById("font").innerHTML="Font Size="+difference+"px";
    textSize(difference);
     fill("#000000");
     text("Udaya",50,400);

}
function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length>0){
        console.log(results);
        LwristX=results[0].pose.leftWrist.x;
        RwristX=results[0].pose.rightWrist.x;

        difference=floor(LwristX-RwristX);


    }
}