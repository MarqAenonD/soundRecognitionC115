//https://teachablemachine.withgoogle.com/models/gOPLjD7yT/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = m15.soundClassifier("https://teachablemachine.withgoogle.com/models/gOPLjD7yT", modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}