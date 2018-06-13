// Make the portfolio mobile friendly
$(document).ready(function() {

function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "container-fluid") {
        x.className += " responsive";
    } else {
        x.className = "container-fluid";
    }
}

});