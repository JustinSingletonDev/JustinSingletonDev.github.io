window.onload = function loadDoc() {
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = this.responseText;

            txt = "";
            j = JSON.parse(json);
            
            for (const property in j) {
                document.getElementById("titles").insertAdjacentHTML(
                    "beforeend", `<th>${property}</th>`);
                console.log(`<th>${property}</th>`);
            }
            for (const property in j.CCAF) {
                document.getElementById("CCAF").insertAdjacentHTML(
                    "beforeend", `<td>${property}</td>`);
                console.log(`${property}`);
            }
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