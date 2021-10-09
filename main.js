function strtclssfing() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JtoZVN0hT/model.json', modelready);
}

function modelready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        randomNoR = Math.floor(Math.random() * 255) + 1;
        randomNoG = Math.floor(Math.random() * 255) + 1;
        randomNoB = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy: " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + randomNoR + "," + randomNoG + "," + randomNoB + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + randomNoR + "," + randomNoG + "," + randomNoB + ")";
        img = document.getElementById("image");
        if (results[0].label == "Barking") {
            img.src = 'https://www.downloadclipart.net/thumb/7677-dog-side-view-vector-thumb.png';
        } else if (results[0].label == "Meowing") {
            img.src = 'https://www.downloadclipart.net/thumb/18907-orange-cat-silhouette-vector-thumb.png';
        } else if (results[0].label == "Roar") {
            img.src = 'https://www.clipartmax.com/png/small/310-3101594_bengal-tiger-clip-art-bengal-tiger-clip-art-clipart-cincinnati-bengals-head.png';
        } else if (results[0].label == "Mooing") {
            img.src = 'https://lh3.googleusercontent.com/proxy/kDwNVvcl3Tz2NptCjfOaOFOYcTbFNESVYEyoPfzbKVZcXzeEk8HEFTEPa9d-1C2FU4JvpiPjPMWrkoEDbNuExS8nMBbQ-G5OPnCm6vlRc3LACfpkyb8SrDx_Hg1fRI77t33-U-3cAhtKgTs';
        } else {
            img.src = 'Transparent.png';
        }
    }
}