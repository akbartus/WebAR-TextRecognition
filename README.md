# Text Recognition in Web AR
![Screenshot](files/screenshot.gif)

### **Description / Rationale**
This is the project demonstrating the usage of text recognition, which includes both printed text and handwritten text, in creating dynamic AR markers (i.e. the markers which can be easily changed and manipulated without the need for coding). The project uses [GLMOL component ](https://github.com/SBUtltmedia/aframe-glmol-component) and loads a 3d molecular structure based on [Protein Data Bank (PDB) ID](https://www.rcsb.org/). 

### **Instructions**
To see the text recognition at work, do the following:
1. Use template marker and write PDB ID of molecular structure you want to see.
![Template marker](files/template.jpg)
![Marker with handwriting](files/target_1.jpg)
2. Using your camera, look at at newly created marker, and click on text recognition icon.
3. Wait for the text recognition system to identify the written text and load the desired molecular structure.

### **Tools Used**
The project powered by computer vision + AI model hosted on HuggingFace. At its core it uses AFrame and Ar.js.

### **Credits**
<p>3D model of the room was created by <b>Francesco Coldesina</b>, and taken from <a href="https://sketchfab.com/3d-models/big-room-0b5da073be88481091dbef7e55f1d180">Sketchfab.com</a></p>

### **Demo**
To see the application at work: [Demo application](https://image-captioning.glitch.me/)
