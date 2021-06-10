console.log('ml5 version:' , ml5.version);

Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fWhwZHtMr/model.json',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}