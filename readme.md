# Strike a Pose
## A simple pose controlled game
#### ZHdK 2023 | CAS Coding for the Arts | Machine Learning | Michael Koritschan

## File Structure
- `readme.md`: this file
- `index.html`: main HTML file
- CSS
  - `css/style.css`: main style sheet
- JS
  - `p5mainEnvironment.js`: main P5 sketch (probably containing the obstacles)
  - `poseDetection.js`: MediaPipe or ML5 setup for pose detection
  - `globalVariables.js`: global variables that are used in multiple files
  - TBD: `p5drawPose.js`: P5 sketch for drawing the pose (abstract avatar?)

## Refernces
- [MediaPipe Pose Landmark Detection for web](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/web_js)
- [Pose Landmark Point Definitions](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model)