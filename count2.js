// Script to count to arbitrary number based on form input

function doName(vname) {
    document.getElementById("vname").innerHTML = "Hello " + vname;
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("numInput").style.display = "block";
}

function doCount(n) {
    alert("Number received: " + n); 
    document.getElementById("outputArea").style.display = "block"
    document.getElementById("outputArea").innerHTML = n;   
}
