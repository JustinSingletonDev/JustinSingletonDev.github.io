window.onload = function loadDoc() {
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = this.responseText;
            console.log(json);

            txt = "";
            j = JSON.parse(json);
            console.log(j);

            schools = j.my_schools[0].School;

            console.log(schools);
        }
    };
    xhttp.open("GET", "schools.json", true);
    xhttp.send();
}


//xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        for (i = 0; i < schools.length; i++) {
//            txt = txt + schools[i].childNodes[0].nodeValue + "<br>";
//        }
//        document.getElementById("demo").innerHTML = txt;
//    }
//};