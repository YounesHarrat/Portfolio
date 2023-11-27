// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
import p5 from "p5"
let symmetry = 6;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton, fullscreenButton,brushSizeSlider,
sizeSlider, width, height, mouseX, mouseY, mouseIsPressed, mousePressed ;
let slider;

function setup() { 
  p5.createCanvas(710, 710);
  p5.angleMode("DEGREES");
  p5.background(127);

  // Creating the save button for the file
  saveButton = p5.createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = p5.createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = p5.createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = p5.createButton('Brush Size Slider');
  sizeSlider = p5.createSlider(1, 32, 4, 0.1);
}

// Save File Function
function saveFile() {
  p5.save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  p5.background(127);
}

// Full Screen Function
function screenFull() {
  let fs = p5.fullscreen();
  p5.fullscreen(!fs);
}

function draw() {
  p5.translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        p5.rotate(angle);
        let sw = sizeSlider.value();
        p5.strokeWeight(sw);
        p5.line(mx, my, pmx, pmy);
        p5.push();
        p5.scale(1, -1);
        p5.line(mx, my, pmx, pmy);
        p5.pop();
      }
    }
  }
}