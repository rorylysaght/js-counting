// Script to count to arbitrary number based on form input

    // function to clear all page entries and reset state to blank
    // **** note two statements on one line, separated by semicolon ;
function cleanUp() {
	document.frm1.box1.value='';document.frm1.box1.focus();
	document.getElementById("header").innerHTML = "Counting ...";
	document.getElementById("outputArea").innerHTML = "";
	document.getElementById("outputArea").style.visibility="hidden";
}

function doCount(n) {
    var newVal = 0;
    var numSeries = null;

    //test that input is numeric.  Do this first before other tests
    // **** NOTE: == is a logical test, = is assignment operator ****
    if (isNaN(n) == true) {
        alert("Please enter numbers only");
        cleanUp();    // call another function to clean up the page
        return;
    }

    //test for Min and Max values
    // **** NOTE: \n in alert is a newline character 'escaped' ****
    if (n < 4) {
        alert("That's too low to demonstrate our program. \nPlease choose a number greater than 4");
        document.frm1.box1.value='';document.frm1.box1.focus();
        cleanUp();    // call another function to clean up the page
        return;
    }
    
    if (n > 100) {
        alert("That's too large - we'll be here all day. \nResetting to 100");
        newVal = 100;
    } else {
        // by now we know n is numeric, between 4 and 100, so change to integer (whole number) 
        newVal = parseInt(n)
    }
    
    // ok, all inputs verified within range:  let's do it!
    alert("Number received: " + newVal); 
    for (i = 1; i <= newVal; i++) {
        numSeries = numSeries + i + "<br>"
        i = i + 1;
    }
    document.getElementById("header").innerHTML = "Counting to " + newVal;
    document.getElementById("outputArea").style.visibility="visible";
    document.getElementById("outputArea").innerHTML = numSeries;
}