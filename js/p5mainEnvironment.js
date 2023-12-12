function setup() {
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent('#p5')
  }

const baseSize = 250;

function draw() {
    background(0);
    fill(255);
    
    const positions = [
      nosePosition,
      leftHandPosition,
      rightHandPosition,
      leftElbowPosition,
      rightElbowPosition,
      leftShoulderPosition,
      rightShoulderPosition,
      leftHipPosition,
      rightHipPosition,
      leftKneePosition,
      rightKneePosition,
      leftToePosition,
      rightToePosition
    ];
  
    positions.forEach(position => {
      const [x, y, z] = position;
      const size = baseSize / (position === nosePosition ? 1 : (position === leftHandPosition || position === rightHandPosition || position === leftToePosition || position === rightToePosition) ? 2 : 3);
      ellipse(width - x * width, y * height, z * size);
    });
  }