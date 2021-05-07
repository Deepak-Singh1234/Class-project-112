Webcam.set({
    width : 300,
    height : 300,
    image_format : 'jpg',
    jpg_quality : 100 
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function webcamview(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

    console.log('ml5version',ml5.version);
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);

    function modelLoaded(){
        console.log("modelnowisnotsleeping");
    }

    function snapshotview(){
        img = document.getElementById("captured_image");
        classifier.classify(img,gotResult);
    }

    function gotResult(error, results) 
    { 
        if (error)
         { console.error(error); } 
    else { console.log(results);
         document.getElementById("objectname").innerHTML = results[0].label; 
        
        }}