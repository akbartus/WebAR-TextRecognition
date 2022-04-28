# Text Recognition in Web AR
![Screenshot](files/screenshot.gif)

### **Description / Rationale**
This is the project demonstrating the usage of text recognition, which includes both printed text and handwritten text, in creating dynamic AR markers (i.e. the markers which can be easily changed and manipulated without the need for coding). The project uses [GLMOL component ](https://github.com/SBUtltmedia/aframe-glmol-component) and loads a 3d molecular structure based on [Protein Data Bank (PDB) ID](https://www.rcsb.org/). 

### **Instructions**
To see the text recognition at work, do the following:
1. Use template marker and write PDB ID of molecular structure you want to see.
<img alt="Template marker" src="files/template.jpg" width="200">
<img alt="Marker with handwriting" src="files/target_1.jpg" width="200">
2. Using your camera, look at at newly created marker, and click on text recognition icon.
3. Wait for the text recognition system to identify the written text and load the desired molecular structure.

### **Tools Used**
The project powered by computer vision + AI model hosted on HuggingFace. At its core it uses AFrame and Ar.js.

### **Credits**
The text recognition icon used in this project was taken from VeryIcon.com website with no attribution required.
Computer vision + AI model used in this project is: [MaskTextSpotterV3-OCR ](https://huggingface.co/spaces/tomofi/MaskTextSpotterV3-OCR). 

### **Demo**
To see the application at work: [Demo application](https://webar-textrecognition.glitch.me/)
