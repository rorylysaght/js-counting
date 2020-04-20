// Script to count to arbitrary number based on form input


function doCount(n) {
    alert("Number received: " + n); 
    for (i = 1; i < n; i++) {
        document.getElementById("outputArea").innerHTML = i;
    }
}