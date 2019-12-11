function onCreateClick() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // Thisis the callback function
            // Get the string data that the server sent us.
            const resultString = this.responseText;

            // Create an object which converts the string to an object using JSON parsing.
            var resultObject = JSON.parse(resultString);

            // Please note, "was_logged_in" is a key set by the server.
            if (resultObject.was_logged_in === false) {
                alert(resultObject.reason);
            } else {
                window.location.href = "{% url 'dashboard_page' %}";
            }
        }
    }

  }

  xhttp.open("POST", "{% url 'create_apis' %}", true);
  xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  const name = document.getElementById("name").value;
  const ingredians = document.getElementById("ingredians").value;
  const introduction = document.getElementById("introduction").value;
  const cooking = document.getElementById("cooking").value;
  const culture = document.getElementById("culture").value;
  xhttp.send("name="+name+"&ingredians="+ingredians+"&introduction="+introduction+"&cooking="+cooking+"&culture="+culture);
}

function onBackClick() {
  window.location.href = "{% url 'dashboard_page' %}";
}
