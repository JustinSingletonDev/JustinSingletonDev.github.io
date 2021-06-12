window.onload = function loadDoc() {
    xhttp = new XMLHttpRequest();
    json = this.responseText
    txt = "";
    j = JSON.parse(json);

    schools = j.Schools;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            for (i = 0; i < schools.length; i++) {
                txt = txt + schools[i].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("demo").innerHTML = txt;
        }
    };
    xhttp.open("GET", "schools.json", true);
    xhttp.send();
}