let recognized = document.querySelector("#recognized");
let container = document.querySelector("#container");

function resizeCanvas(origCanvas, width, height) {
    let resizedCanvas = document.createElement("canvas");
    let resizedContext = resizedCanvas.getContext("2d");

    resizedCanvas.height = height;
    resizedCanvas.width = width;

    resizedContext.drawImage(origCanvas, 0, 0, width, height);
    return resizedCanvas.toDataURL();
}

document.getElementById("recognize").addEventListener("click", function () {
    let aScene = document.querySelector("a-scene").components.screenshot.getCanvas("perspective");


    let frame = captureVideoFrame("video", "png");
    aScene = resizeCanvas(aScene, frame.width, frame.height);
    frame = frame.dataUri;
    container.setAttribute("style", "visibility: visible");
    recognized.setAttribute("style", "visibility: visible");
    recognized.innerHTML = "Loading...";
    handwritingOCR(frame);
});

// Capture video frame
function captureVideoFrame(video, format, width, height) {
    if (typeof video === 'string') {
        video = document.querySelector(video);
    }
    format = format || 'jpeg';

    if (!video || (format !== 'png' && format !== 'jpeg')) {
        return false;
    }
    var canvas = document.createElement("CANVAS");
    canvas.width = width || video.videoWidth;
    canvas.height = height || video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    var dataUri = canvas.toDataURL('image/' + format);
    var data = dataUri.split(',')[1];
    var mimeType = dataUri.split(';')[0].slice(5)
    var bytes = window.atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < bytes.length; i++) {
        arr[i] = bytes.charCodeAt(i);
    }
    var blob = new Blob([arr], {
        type: mimeType
    });
    return {
        blob: blob,
        dataUri: dataUri,
        format: format,
        width: canvas.width,
        height: canvas.height
    };
};

// Text/Handwriting OCR
function handwritingOCR(frame) {
    fetch('https://hf.space/embed/Akbartus/OCR/+/api/predict/', {
            method: "POST",
            body: JSON.stringify({
                "data": ["data:" + frame]
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            function (response) {
                return response.json();
            })
        .then(function (json_response) {
            var arrayLength = json_response.data[1].data;
            if (arrayLength == 0) {
                recognized.innerHTML = "Please scan one more time...";
                setTimeout(() => {
                    container.setAttribute("style", "visibility: hidden");
                    recognized.setAttribute("style", "visibility: hidden");
                }, 2000);
            } else {
                var result = json_response.data[1].data[0][0];
                recognized.innerHTML = "I see: " + result;
                // Change molecular structure based on pbd ID
                document.getElementById("molStructure").setAttribute("glmol", "molId:pdb:" + result);
                setTimeout(() => {
                    container.setAttribute("style", "visibility: hidden");
                    recognized.setAttribute("style", "visibility: hidden");
                }, 2000);
            }
        })
}