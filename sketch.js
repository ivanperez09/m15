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

let capture;
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

    eyes = loadImage('images/eyes.png');
    nose = loadImage('images/nose.png');
    leftear = loadImage('images/leftear.png');
    rightear = loadImage('images/rightear.png');
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

        image(rareeyes, keypoint.leftEye.x+1, keypoint.leftEye.y+1, 30, 30);
        image(rareeyes, keypoint.rightEye.x+1, keypoint.rightEye.y+1, 30, 30);
        image(noseclown, keypoint.nose.x+1, keypoint.nose.y+1, 30, 30);
        image(leftairpod, keypoint.leftEar.x+1, keypoint.leftEar.y+1, 30, 30);
        image(rightairpod, keypoint.rightEar.x+1, keypoint.rightEar.y+1, 30, 30);
    }
    
  }


