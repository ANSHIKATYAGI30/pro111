prediction1 = "";
prediction2 = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
 Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+data_uri+'">';



 });


}

function speak() {
var speaking = window.speechSynthesis;
speak_data_1 = "the first prediction is "+ prediction1;
speak_data_2 = "the second prediction is "+ prediction2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
speaking.speak(utterThis);


}
console.log("ml5 version is",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelloaded);
function modelloaded() {
console.log("the models is loaded successfully");
}
