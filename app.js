window.onload = function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(my_schools);
        }
    };
    xhttp.open("GET", "app.js", true);
    xhttp.send();
}