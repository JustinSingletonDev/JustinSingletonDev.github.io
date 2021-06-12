window.onload = function loadDoc() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "app.js", true);
    xhttp.send();
}