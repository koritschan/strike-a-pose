function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent('#p5')
  }

const baseSize = 250;

function draw() {
    background(0);
    fill(255);
    ellipse(width-nosePosition[0]*width, nosePosition[1]*height, nosePosition[2]*baseSize);
    ellipse(width-leftHandPosition[0]*width, leftHandPosition[1]*height, leftHandPosition[2]*(baseSize/2));
    ellipse(width-rightHandPosition[0]*width, rightHandPosition[1]*height, rightHandPosition[2]*(baseSize/2));
    ellipse(width-leftElbowPosition[0]*width, leftElbowPosition[1]*height, leftElbowPosition[2]*(baseSize/3));
    ellipse(width-rightElbowPosition[0]*width, rightElbowPosition[1]*height, rightElbowPosition[2]*(baseSize/3));
    ellipse(width-leftShoulderPosition[0]*width, leftShoulderPosition[1]*height, leftShoulderPosition[2]*(baseSize/3));
    ellipse(width-rightShoulderPosition[0]*width, rightShoulderPosition[1]*height, rightShoulderPosition[2]*(baseSize/3));
    ellipse(width-leftHipPosition[0]*width, leftHipPosition[1]*height, leftHipPosition[2]*(baseSize/3));
    ellipse(width-rightHipPosition[0]*width, rightHipPosition[1]*height, rightHipPosition[2]*(baseSize/3));
    ellipse(width-leftKneePosition[0]*width, leftKneePosition[1]*height, leftKneePosition[2]*(baseSize/3));
    ellipse(width-rightKneePosition[0]*width, rightKneePosition[1]*height, rightKneePosition[2]*(baseSize/3));
    ellipse(width-leftToePosition[0]*width, leftToePosition[1]*height, leftToePosition[2]*(baseSize/2));
    ellipse(width-rightToePosition[0]*width, rightToePosition[1]*height, rightToePosition[2]*(baseSize/2));
  }