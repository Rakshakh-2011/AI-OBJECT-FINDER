video = "";

function setup() {
    canvas = createCanvas(360, 360);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
}
function start(){
    bjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video, 0, 0, 360, 360);
}

