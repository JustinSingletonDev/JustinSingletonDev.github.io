window.onload = function loadDoc() {
    xhttp = new XMLHttpRequest();
    json = this.responseText
    txt = "";
    j = json.getElementsByTagName("School");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            for (i = 0; i < j.length; i++) {
                txt = txt + j[i].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("demo").innerHTML = txt;
        }
    };
    xhttp.open("GET", "schools.json", true);
    xhttp.send();
}