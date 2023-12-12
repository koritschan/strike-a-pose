function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent('#p5')
  }

function draw() {
    background(0);
    fill(255);
    ellipse(width-nosePosition[0]*width, nosePosition[1]*height, 100, 100);
    ellipse(width-leftHandPosition[0]*width, leftHandPosition[1]*height, 50, 50);
    ellipse(width-rightHandPosition[0]*width, rightHandPosition[1]*height, 50, 50);
    ellipse(width-leftElbowPosition[0]*width, leftElbowPosition[1]*height, 20, 20);
    ellipse(width-rightElbowPosition[0]*width, rightElbowPosition[1]*height, 20, 20);
    ellipse(width-leftShoulderPosition[0]*width, leftShoulderPosition[1]*height, 20, 20);
    ellipse(width-rightShoulderPosition[0]*width, rightShoulderPosition[1]*height, 20, 20);
    ellipse(width-leftHipPosition[0]*width, leftHipPosition[1]*height, 20, 20);
    ellipse(width-rightHipPosition[0]*width, rightHipPosition[1]*height, 20, 20);
    ellipse(width-leftKneePosition[0]*width, leftKneePosition[1]*height, 20, 20);
    ellipse(width-rightKneePosition[0]*width, rightKneePosition[1]*height, 20, 20);
    ellipse(width-leftToePosition[0]*width, leftToePosition[1]*height, 50, 50);
    ellipse(width-rightToePosition[0]*width, rightToePosition[1]*height, 50, 50);
  }