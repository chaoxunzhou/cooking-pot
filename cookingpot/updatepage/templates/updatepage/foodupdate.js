function generateViewFromObject(dataObj) {
    if (dataObj.was_found === false) {
        alert("Sorry we could not find that instrument!");
        onBackClick();
    } else {
        var idInputElement = document.getElementById("id");
        var nameInputElement = document.getElementById("name");
        var ingrediansInputElement = document.getElementById("ingredians");
        var introductionInputElement = document.getElementById("introduction");
        var cookingInputElement = document.getElementById("cooking");
        var cultureInputElement = document.getElementById("culture");
        idInputElement.value = dataObj.id;
        nameInputElement.value = dataObj.name;
        ingrediansInputElement.value = dataObj.ingredians;
        introductionInputElement.value = dataObj.introduction;
        cookingInputElement.value = dataObj.cooking;
        cultureInputElement.value = dataObj.culture;
    }
}

function onPageLoadRunGetInstrumentDetailsFromAPI(foodlist_id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const dataString = this.responseText;
            const dataObj = JSON.parse(dataString);
            generateViewFromObject(dataObj);
        }
    }
    const detailURL = "/api/foodlist/"+foodlist_id.toString();
    console.log(detailURL);
    xhttp.open("GET", detailURL, true);
    xhttp.send();
}

const foodlist_id = {{ foodlist_id }};
onPageLoadRunGetInstrumentDetailsFromAPI(foodlist_id);


function onBackClick() {
    window.location.href = "{% url 'dashboard_page' %}"
}

function onSubmitClick() {
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
                window.location.href = "{% url 'index_page' %}";
            }
        }
    }

    const foodlist_id = {{ foodlist_id }};
    xhttp.open("POST", "/api/foodlist/"+foodlist_id+"/update", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    const name = document.getElementById("name").value;
    const ingredians = document.getElementById("ingredians").value;
    const introduction = document.getElementById("introduction").value;
    const cooking = document.getElementById("cooking").value;
    const culture = document.getElementById("culture").value;
    xhttp.send("name="+name+"&ingredians="+ingredians+"&introduction="+introduction+"&cooking="+cooking+"&culture="+culture);
}
