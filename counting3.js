// Script to count to arbitrary number based on form input
var numSeries = 0;

function doCount(n) {
    alert("Number received: " + n); 
    for (i = 1; i <= n; i++) {
        numSeries = numSeries + i + "<br>"
    }
    document.getElementById("outputArea").innerHTML = numSeries;
}