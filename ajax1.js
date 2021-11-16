function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = JSON.parse(this.responseText);

            myObj = JSON.parse(this.responseText);
            var groc = myObj.grocery;

            text = "<center><br><br><table border='1' bgcolor='beige' cellpadding='10' height='450' width='750' align='center'><tr><th>SerialNo</th><th>Item name</th><th>Item Quantity</th><th>Unit</th><th>Price</th><th>Department</th></tr>"
            for (x in groc) {

                text += "<tr ><td align='center'>" + groc[x].SerialNo + "<td>" + groc[x].itemname + " </td>" + "<td align='center'>" + groc[x].quantity + " </td>" + "<td align='center'>" + groc[x].unit + " </td>" + "<td align='center'>" + groc[x].price + " </td>" + "<td >" + groc[x].Department  + "</tr> ";
            }
            text += "</table></center>"
            document.getElementById("tab").innerHTML = text;
        }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}

