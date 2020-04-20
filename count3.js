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

function doEncode(string) {
    //HTML Encoded:  %26%2365%3B%26%23108%3B%26%2397%3B%26%23110%3B%26%2332%3B%26%2384%3B%26%23117%3B%26%23114%3B%26%23105%3B%26%23110%3B%26%23103%3B
    
    var newString = decodeURIComponent(string).toString()
    alert("You Entered: \n" + newString)
    
    document.getElementById("coded").innerHTML = newString
    //return newString
}