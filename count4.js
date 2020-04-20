// Script to count to arbitrary number based on form input

function doName(vname) {
// test if something entered in name box
    if (vname.length < 1) {
        alert("Let's be friends - please enter your name");
		// put the cursor back into the name box
        document.frm1.box1.focus();
	}
	else
	{
		// we've got something, so now let's check it looks like a name
		// names are complicated - all sorts of special characters are legal
		// but they generally don't contain only numbers
		if (isNaN(vname) == false) {
			alert("Hmm, that doesn't look like a name.  Please enter just letters.")
			document.frm1.box1.value=''; document.frm1.box1.focus();
			document.getElementsByTagName("em")[0].style.backgroundColor = "red";
		}
		else {
			document.getElementById("vname").innerHTML = "Hello " + vname;
			document.getElementById("nameInput").style.visibility = "hidden";
			document.getElementById("numInput").style.visibility = "visible";
			document.getElementById("frm1").style.backgroundColor = "red";
		}
    }
}

function doCount(n) {
    var newVal = 0;
    var numSeries = null;
    
    //#1: test that input is numeric.  Do this first before other tests
    // **** NOTE: == is a logical test, = is assignment operator ****
    if (isNaN(n) == true) {
        alert("Please enter numbers only");
		document.getElementsByTagName("em")[1].style.backgroundColor = "#9ff";
        cleanUp();    // call function to reset & clean up the page
        return;
    }

    //#2: test for Min and Max values
    // **** NOTE: \n in alert is a newline character 'escaped' ****
    if (n < 4) {
        alert("That's too low to demonstrate our program. \nPlease choose a number greater than 4");
        document.frm1.box2.value='';document.frm1.box2.focus();
        cleanUp();    // call function to reset & clean up the page
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
    //alert("Number received: " + newVal); 
    for (i = 1; i <= newVal; i++) {
        numSeries = numSeries + i + "<br>"
        i = i + 1;
        document.getElementById("outputArea").innerHTML = numSeries;
    }
    document.getElementById("header").innerHTML = "Counting to " + newVal;
    document.getElementById("outputArea").style.display="block";
	document.getElementById("resetBtn").style.visibility="visible";
	//document.frm1.btn2.value="reset";
	//document.frm1.btn2.setAttribute('onClick','location.reload()');   
}

function cleanUp() {
    // function to clear all page entries and reset state to blank
    // this is called if invalid values entered in number box
    // **** note two statements on one line, separated by semicolon ;
    document.frm1.box2.value=''; document.frm1.box2.focus();
    document.getElementById("header").innerHTML = "Waiting for a number ...";
    document.getElementById("outputArea").innerHTML = "";
    document.getElementById("outputArea").style.display="none";
}
