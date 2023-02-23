//https://teachablemachine.withgoogle.com/models/gOPLjD7yT/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gOPLjD7yT/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "the AI hears: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + ", " + random_number_g + ", " + random_number_b + ")";

        img = document.getElementById("listen");

        if (results[0].label == "bark") {
            img.src = "dog.png";
        } else if (results[0].label == "chirp") {
            img.src = "bird.png";
        } else if (results[0].label == "meow") {
            img.src = "cat.png";
        } else if (results[0].label == "moo") {
            img.src = "cow.png";
        } else {
            img.src = "listen.png";
        };
    }
}
