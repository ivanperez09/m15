/*let video;
let poseNet;
let poses = [];
let nose
let eyes
let leftear
let rightear


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  eyes = loadImage('images/eyes.png');
  nose = loadImage('images/nose.png');
  leftear = loadImage('images/leftear.png');
  rightear = loadImage('images/rightear.png');

  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on('pose', function(results) {
    poses = results;
  });

  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);


  drawKeypoints();
  drawSkeleton();
}


function drawKeypoints()  {

  for (let i = 0; i < poses.length; i++) {

      let pose = poses[i].pose;
      for (let j = 0; j < pose.keypoints.length; j++) {

      let keypoint = pose.keypoints[j];

      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();

        image(eyes, keypoint.leftEye.x+1, keypoint.leftEye.y+1, 30, 30);
        image(eyes, keypoint.rightEye.x+1, keypoint.rightEye.y+1, 30, 30);
        image(nose, keypoint.nose.x+1, keypoint.nose.y+1, 30, 30);
        image(leftear, keypoint.leftEar.x+1, keypoint.leftEar.y+1, 30, 30);
        image(rightear, keypoint.rightEar.x+1, keypoint.rightEar.y+1, 30, 30);
        
      }
    }
  }
}


function drawSkeleton() {

  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;

    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 255, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}*/

/*let capture;
let posenet;
let noseclown
let rareeyes
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let leftairpod
let rightairpod
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {  // this function runs only once while running
    createCanvas(800, 500);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLOADED);
    posenet.on('pose', recievedPoses);

    rareeyes = loadImage('images/eyes.png');
    noseclown = loadImage('images/nose.png');
    leftairpod = loadImage('images/leftear.png');
    rightairpod = loadImage('images/rightear.png');
}

function recievedPoses(poses) {
    console.log(poses);

    if(poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLOADED() {
    console.log("model has loaded");
}


function draw() { 
    
    image(capture, 0, 0);
    fill(255, 0, 0);
    
    if(singlePose) {
        for(let i=0; i<singlePose.keypoints.length; i++) {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }

        stroke(255, 255, 255);
        strokeWeight(5);

        for(let j=0; j<skeleton.length; j++) {
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }

        image(rareeyes, singlePose.leftEye.x, singlePose.leftEye.y, 30, 30);
        image(rareeyes, singlePose.rightEye.x, singlePose.rightEye.y, 30, 30);
        image(noseclown, singlePose.nose.x, singlePose.nose.y, 30, 30);
        image(leftairpod, singlePose.leftEar.x, singlePose.leftEar.y, 30, 30);
        image(rightairpod, singlePose.rightEar.x, singlePose.rightEar.y, 30, 30);
    }
    
  }*/
/*<div>Teachable Machine Image Model - p5.js and ml5.js</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
<script src="https://unpkg.com/ml5@latest/dist/ml5.min.js"></script>
<script type="text/javascript">*/
  // Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/oMInfkwO0/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}
//</script>



