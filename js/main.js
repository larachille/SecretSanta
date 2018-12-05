var information;

function run(){
   loadJSON(); 
}

function loadJSON(){
    var request = new XMLHttpRequest();
    request.open("GET", "/json/questions.json", false);
    request.send(null);
    var my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object);
}