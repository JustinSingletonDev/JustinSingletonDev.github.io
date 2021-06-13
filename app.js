window.onload = function loadDoc() {
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = this.responseText;
            console.log(json);

            titles = "";
            txt = "";
            j = JSON.parse(json);
            console.log(j);

            schools = j.CCAF;

            console.log(schools);
            
            for (i = 0; i < j.length; i++) {
                titles = "<th>" + j[i].nodeValue + "</th>";
                console.log(titles);
            }
            document.getElementById("titles").innerHTML = titles;
        }
    };
    xhttp.open("GET", "schools.json", true);
    xhttp.send();
}


//    xhttp.onreadystatechange = function() {
//        if (this.readyState == 4 && this.status == 200) {
//            for (i = 0; i < schools.length; i++) {
//                txt = txt + schools[i].childNodes[0].nodeValue + "<br>";
//            }
//            document.getElementById("demo").innerHTML = txt;
//        }
//    };