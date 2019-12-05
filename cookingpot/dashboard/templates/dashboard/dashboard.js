function onPageLoadGetDashboardAPI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataString = this.responseText;
            const dataObj = JSON.parse(dataString);
            generateTableFromObject(dataObj);
        }
    }
    xhttp.open("GET","api/dashboard", true);
    xhttp.send();
}

onPageLoadGetDashboardAPI();

function onLogoutClick() {
    window.location.href = "{% url 'logout_page' %}";
}


function generateTableFromObject(dataObj) {
   // This is the code which will create
   // the table header row.
   var htmlText = "<tr>";
   htmlText += "<th>Name</th>";
   htmlText += "<th>Ingredians</th>";
   htmlText += "<th>Culture</th>";
   htmlText += "<th></th>";
   htmlText += "</tr>";
   // This is the code which will generate
   // all the rows from the data from the
   // API endpoint.
   const foodlistArray = dataObj.results;
   for (foodlistObj of foodlistArray) {
       var idString = foodlistObj.id.toString();
       htmlText += "<tr>"; // START OF TABLE ROW
       htmlText += "<td>"+foodlistObj.name+"</td>"
       htmlText += "<td>"+ foodlistObj.ingredians + "</td>";
       htmlText += "<td>"+ foodlistObj.culture + "</td>";

       htmlText += "<td>";
       htmlText += "<button onclick='onViewClick("+idString+");'>View</button>";
       htmlText += "</td>";

       htmlText += "</tr>"; // END OF TABLE ROW
   }
   var tableElement = document.getElementById("food_list");
   tableElement.innerHTML = htmlText;
}
