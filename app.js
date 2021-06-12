window.onload = function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.my_schools;
        }
    };
    xhttp.open("GET", "schools.json", true);
    xhttp.send();
}