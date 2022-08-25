const videoElement = document.getElementById('input_video');
const canvasElement = document.getElementById('output_canvas');
const canvasCtx = canvasElement.getContext('2d');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');

const canvasElement2 = document.getElementById("output_canvas2");
const canvasCtx2 = canvasElement2.getContext('2d');

var age = 0;
var salary = 0;
var salarystr = "";
var counter = 0;

var video = document.querySelector("#input_video");

function onResults(results) {
  
  var cx,cy;	
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
	  var myJSON = JSON.stringify(landmarks[8]);
	  var myJSON2 = JSON.parse(myJSON);
	  cx = parseInt(myJSON2.x*canvasElement.width);
	  cy = parseInt(myJSON2.y*canvasElement.height);	
	  
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: 'yellow', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: 'blue', lineWidth: 2});
    }
  }
  canvasCtx.font = "20px Arial";
  canvasCtx.fillText("Enter Your Age :" + age, 10, 20);
  canvasCtx.fillText("Select range of salary : " + salary, 10, 150);
  canvasCtx.fillText("Press the button:", 10, 350);
  canvasCtx.fillText("Submit ", 187, 425);
  canvasCtx.font = "40px Arial";
  canvasCtx.fillText("+", 60, 90);
  canvasCtx.fillText("-", 215, 85);
  canvasCtx.font = "15px Arial";
  canvasCtx.fillText("(1) 0-2000", 60, 210);
  canvasCtx.fillText("(2) 2001-4000", 210, 210);
  canvasCtx.fillText("(3) 4001-6000", 360, 210);
  canvasCtx.fillText("(4) 6001-8000", 60, 280);
  canvasCtx.fillText("(5) 8001+", 210, 280);
  canvasCtx.restore();
  
  let src = cv.imread('output_canvas');
  if (cx > 50 && cx < 100 && cy > 50 && cy<100 && counter==1)
  {
    age = age + 1;
    if (age>99){
      age = 99;
    }
	  cv.rectangle(src, new cv.Point(50, 50), new cv.Point(100, 100), [0, 255, 0, 255], 3); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(50, 50), new cv.Point(100, 100), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  
  if (cx > 200 && cx < 250 && cy > 50 && cy<100 && counter==1)
  {
    age = age - 1;
    if (age<0){
      age = 0
    }
	  cv.rectangle(src, new cv.Point(200, 50), new cv.Point(250, 100), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(200, 50), new cv.Point(250, 100), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  
  if (cx > 50 && cx < 160 && cy > 180 && cy<230 && counter==1)
  {
    salary = 1;
	  cv.rectangle(src, new cv.Point(50, 180), new cv.Point(160, 230), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(50, 180), new cv.Point(160, 230), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  if (cx > 200 && cx < 310 && cy > 180 && cy<230 && counter==1)
  {
    salary = 2;
	  cv.rectangle(src, new cv.Point(200, 180), new cv.Point(310, 230), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(200, 180), new cv.Point(310, 230), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  if (cx > 350 && cx < 460 && cy > 180 && cy<230 && counter==1)
  {
    salary = 3;
	  cv.rectangle(src, new cv.Point(350, 180), new cv.Point(460, 230), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(350, 180), new cv.Point(460, 230), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  if (cx > 50 && cx < 160 && cy > 250 && cy<300 && counter==1)
  {
    salary = 4;
	  cv.rectangle(src, new cv.Point(50, 250), new cv.Point(160, 300), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(50, 250), new cv.Point(160, 300), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

  if (cx > 200 && cx < 310 && cy > 250 && cy<300 && counter==1)
  {
    salary = 5;
	  cv.rectangle(src, new cv.Point(200, 250), new cv.Point(310, 300), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(200, 250), new cv.Point(310, 300), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }

 

  if (cx > 180 && cx < 260 && cy > 380 && cy<460 && counter==1)
  {
    document.getElementById("myForm").submit();
	  cv.rectangle(src, new cv.Point(180, 380), new cv.Point(260, 460), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(180, 380), new cv.Point(260, 460), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  
  cv.imshow('output_canvas', src);
  src.delete();
  document.getElementById("age").value=age;
  document.getElementById("salary").value=salary;
  counter = counter + 1;
  if (counter == 10){
    counter = 0;
  }
}

function onResults2(results) {
  canvasCtx2.save();
  canvasCtx2.translate(canvasElement2.width, 0);
  canvasCtx2.scale(-1, 1);
  canvasCtx2.clearRect(0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.drawImage(
      results.image, 0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.8,
  minTrackingConfidence: 0.8
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    //flip the video content and load into output_canvas2 before process to detect finger
    onResults2({image: videoElement});
    //use the flipped image in output_canvas2 to detect finger
    await hands.send({image: canvasElement2});
  },
  width: 480,
  height: 480
});
camera.start();

