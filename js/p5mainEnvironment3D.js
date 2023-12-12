function setup() {
  canvas = createCanvas(innerWidth, innerHeight, WEBGL);
  canvas.parent('#p5');
}

const baseSize = 50;

function draw() {
  background(0);
  noStroke();

  pointLight(50, 0, 240, -windowWidth/2, -windowHeight/2, 50);
  pointLight(220, 50, 100, windowWidth/2, windowHeight/2, 50);
  lightFalloff(0.5, 0.001, 0);
  pointLight(100, 150, 150, 100, -800, -500);
  ambientLight(50, 50, 50);
  
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
    // Adjust the coordinates for 3D
    const adjustedX = map(x, 0, 1, -width / 2, width / 2);
    const adjustedY = map(y, 0, 1, -height / 2, height / 2);
    const adjustedZ = map(z, 0, 1, -width / 2, width / 2);
    // Draw a sphere instead of an ellipse
    push();
    specularMaterial(150);
    shininess(3);
    translate(adjustedX, adjustedY, z);
    sphere(size);
    pop();
  });
}