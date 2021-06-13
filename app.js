window.onload = function loadDoc() {
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = this.responseText;

            txt = "";
            j = JSON.parse(json);
            
            for (const property in j.CCAF) {
                document.getElementById("CCAF").insertAdjacentHTML(
                    "beforeend", `<td>${j.CCAF[property]}</td>`);
                console.log(`${j.CCAF[property]}`);
            }
            for (const property in j.DLI) {
                document.getElementById("DLI").insertAdjacentHTML(
                    "beforeend", `<td>${j.DLI[property]}</td>`);
                console.log(`${j.DLI[property]}`);
            }
            for (const property in j.Bellevue) {
                document.getElementById("Bellevue").insertAdjacentHTML(
                    "beforeend", `<td>${j.Bellevue[property]}</td>`);
                console.log(`${j.Bellevue[property]}`);
            }
            for (const property in j.Boston) {
                document.getElementById("Boston").insertAdjacentHTML(
                    "beforeend", `<td>${j.Boston[property]}</td>`);
                console.log(`${j.Boston[property]}`);
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