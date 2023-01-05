
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Aqd3Wte1O/", modelLoaded());
}

function modelLoaded(){
  console.log('Model Loaded!!!!!!!!!!!!! >w<');
}
 function draw() {
  image(video, 0, 0, 300, 300);
  classifer.classify(video, gotResult);
 }

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  
   docment.getElementById("result_object_name").innerHTML = results[0].label;
   docment.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
 function take_snapshot()
 {
   console.log("taking snapshot");
 }