
// this is a single line commont in javascript the other one is to the block
// how to diclerar variables and to use console.log , prompt and alart 
 
 // alert("hello buddy");

/*
var firstName = "henok";
console.log("hi" + firstName);
console.log("hi henok"+ firstName + "?");
 */

/*
var lastName = prompt("what is your last name ?");
console.log("hi" + lastName + "!");
*/

// primative data types string numbers boolean undefined and null

/*
var phrase = 'henok said, "i love you\'r sister " to rahel ';
var x = 3+4;
var noValue; undifend
var secondEmail = null;  null
*/
/*
var = 55;
if ( Number == 55){
	console.log("yes");
} else {
	console.log("no");
}
*/


/*

var theItemOnePrice, theItemTwoPrice, theItemThreePrice, theItemFourPrice;
theItemOnePrice = 239.99;
theItemTwoPrice = 129.75;
theItemThreePrice = 99.95;
theItemFourPrice = 350.89;
// Calculates each line item's total price if the Qty field is not left blank, and displays it in the line item total's field
function calculate_quant(itemNumber, itemQtyID, itemTtlID) {
	
	// Assign form field to a variable
	var myQuant = parseInt(document.getElementById(itemQtyID).value, 10);
	
	// Multiple the quantity by item total amount, round to 2 decimals
	var myTtl = parseFloat(itemNumber * myQuant).toFixed(2);
	
	// If the Quantity inputted is not a number, clear the Line Item Total field
	if (isNaN(myQuant) == true) {
		$(itemTtlID).val('');
	} else {
		// If it is a number, display the multiplied value in the total field
		$(itemTtlID).val(myTtl);
	}
};
function calculate_sales_earnings() {
	
	// Assign form fields to variables for quantity
	var myItem1, myItem2, myItem3, myItem4;
	myItem1 = parseInt(document.getElementById('item1_qty').value, 10);
	myItem2 = parseInt(document.getElementById('item2_qty').value, 10);
	myItem3 = parseInt(document.getElementById('item3_qty').value, 10);
	myItem4 = parseInt(document.getElementById('item4_qty').value, 10);
	
	// If any of the quantity fields are not a number, return an error message and clear the total values in case user has performed a calculation already
	if ( isNaN(myItem1) == true || isNaN(myItem2) == true || isNaN(myItem3) == true || isNaN(myItem4) == true ) {
		$('#error-sales').html('You must fill in all the fields with a number.');
		$('#error-sales').show();
		$('#total_sales').val('');
		$('#total_earnings').val('');
	} else {
		
		// Otherwise, calculate the total sales and earnings and display them in the respective fields
		$('#error-sales').hide();
		var totalSales = parseFloat((myItem1 * theItemOnePrice) + (myItem2 * theItemTwoPrice) + (myItem3 * theItemThreePrice) + (myItem4 * theItemFourPrice)).toFixed(2);
		var totalEarnings = parseFloat( 200 + (0.09 * totalSales)).toFixed(2);
		$('#total_sales').val(totalSales);
		$('#total_earnings').val(totalEarnings);
	};
}

*/
/*
function fahren_to_celsius() {
	// Assign variables to the form inputs
	var fahrenheitInput = parseInt(document.getElementById("fahrenheit_input").value, 10);
	var celsiusInput = parseInt(document.getElementById("celsius_input").value, 10);
	
	// Test to see if there is a value entered for the wrong field or if the right field contains a number; if so, return an error
	if ( isNaN(celsiusInput) == false || isNaN(fahrenheitInput) == true ) {
		$('#error-degrees').html('Make sure you have entered a number in the Fahrenheit field, and that the Celsius field is blank.');
		$('#error-degrees').show();
		
	// If all is good, perform the conversion
	} else {
		$('#error-degrees').hide();
		var celsiusConversion = (5 / 9) * (fahrenheitInput - 32);
		$("#celsius_input").val(celsiusConversion);
	};
}
function celsius_to_fahren() {
	// Assign variables to the form inputs
	var fahrenheitInput = parseInt(document.getElementById("fahrenheit_input").value, 10);
	var celsiusInput = parseInt(document.getElementById("celsius_input").value, 10);
	
	// Test to see if there is a value entered for the wrong field or if the right field contains a number; if so, return an error
	if ( isNaN(fahrenheitInput) == false || isNaN(celsiusInput) == true ) {
		$('#error-degrees').html('Make sure you have entered a number in the Celsius field, and that the Fahrenheit field is blank.');
		$('#error-degrees').show();
		
	// If all is good, perform the conversion
	} else {
		$('#error-degrees').hide();
		var fahrenConversion = ((9 / 5) * celsiusInput) + 32;
		$("#fahrenheit_input").val(fahrenConversion);
	};
}

*/
/*
function claculateAge(birthYear) {
	return 2018 - birthYear;
}
var ageHenok = calcualteAge(1999);
alert(ageHenok);
*/
/*
var x = 0; 

var sum = 0; 

while (x < 10) 

{ 

	x = 1 + x;

	sum = x + sum; 

}

alert( "The sum of the numbers 1 through 10 is " + sum);

*/
/*
var i=0;
do
{
	document.write("The number is " + i);
	document.write("<br>");
i++;
}
while (i<=5);

*/
/*
for ( var myCounter = 0; myCounter < 3; myCounter++ ) 

{

window.alert("Sort one shrimp into the basket");

}
*/
/*
var sum = 0;

for ( var number = 10; number <= 50; number += 3)

{

sum += number;

}

window.alert( "The sum of the even numbers from 10 to 50 is " + sum);

*/
/*
var Date = new Date(2018,0,14,12,32);
var fn;
var opt = {
	weekday: "long",
	year: "numeric",
	month:"long",
	day: "numeric",
	hour : "numeric",
	minute: "numeric"
};
fn = date.toLocalDateString("ar-MA",opt);
////

var fred = ["Hi", 127, true, "Wow"];

for (var myCounter = 0; myCounter < fred.length; myCounter++) {
 alert(fred[myCounter]);
};
*/
/*
<!DOCTYPE html>
<html lang="en">
		<!-- HENOK WELDAY 
HOMEWOEK 5 PART 1--> 
		<head>
				<title> CNIT 133 Homework5</title>
				<meta charset="utf-8">
				<meta name="description" content="This script should validate whether the user has entered data in the input text box, has checked a radio button, has checked at least one checkbox, and has selected an option from the select items and use a submit button to invoke the validation script">

				<style>

				</style>
<script src="https://code.jquery.com/jquery-1.10.1.js"></script>
				
<script>
$(document).ready(function(){
 $(".flip").click(function(){
		$(".panel").slideToggle("slow");
	});
});


function Validate()  {	

var msg = "Enter a name";
var validMsg = "All form fields are valid";
var validMsg = "All form fields are valid";
var x=0;   // use x for determining if form fields valid
var rateChecked = false; // check radio button 
								
// check for any space charcater that may be input

var name = document.getElementById("name").value;

if (name == "" || name == null)
{          	
document.getElementById("msg").innerHTML = msg;
x=1; 
} else if (rateChecked == false) {
	document.getElementById("msg").innerHTML= "<br>Check a rate"; 
} else {
	document.getElementById("msg").innerHTML = "<br>Rate checked is valid";
}
								}
if ( x == 0 )
{
document.getElementById("msgV").innerHTML = validMsg;
}
	}
								
function res() {
		document.getElementById("msg").innerHTML = " ";
		document.getElementById("msgV").innerHTML = " ";

								}

						

				</script>
		</head>
		
		<body onload="document.myform.name.focus();">
				<section class="body">
						<div class="moz">

								<nav>
										<a href= "hw5.html"> HOME </a>
										<a href= "hw5.part1.html">PART 1</a>
										<a href= "hw5.part2.html">PART 2</a>
										<a href= "hw5.part3.html">PART 3</a>
								</nav> 
						</div>
						<h1>PART 1 </h1>
<div class="flip">Click Here to Show/Hide Instructions</div>

<div class="panel"><p>This form has only input text boxes. 
A validation script is used to check whether the user has actually entered
a name, an age between 1 and 120, and a valid email address, when the form is submitted.  
</p></div>

<br>
<br>
						
<div>
<table>
<tr>
<td>
<form id="myform" name="myform">
<table>
<tr>
<td>Name:</td> 
<td><input type="text" name="name" id="name" size="30"></td>
<td><div id="msg"></div></td>
</tr>


<td><input type="button"  onclick="Validate(this.form)" value="SUBMIT"></td>
<td><input type="reset" value="RESET" onclick="window.location.reload();"></td>

<td><input type="reset" value="clear msgs" onclick="res();"></td>

<tr>
<td></td>
<td><div id="msgV"></div></td>
<td></td>
</tr>
</table>
</form>
</td>
</tr>
</table>
</div>

</section>
</body>
</html>

*/
/*
	<script> 

	$(document).ready(function(){
		$(".flip").click(function(){
			$(".panel").slideToggle("slow");
		});
	});

	function Validate()
		{	
			var selstat = document.forms["myform"].elements["status"].selectedIndex;

			if (selstat < 1)  
			{
				document.getElementById("msg").innerHTML = "<br>Select an occupation";
			}
			else
			{
				document.getElementById("msg").innerHTML = "<br>Option selected is valid"; 
			}
		}


	function res()
		 {
			document.getElementById("msg").innerHTML = " ";
		 }
	</script>

 */   

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Sample JavaScript</title> 
<script> 

function doStuff() 
{ 
alert("Here is Yahoo!"); 
window.open("http://www.yahoo.com", "marian", "width=500,height=400"); } 
</script> 
</head> 
<body> 
<p><a href="#" onClick="doStuff();">Calling doStuff()</a> 
</p> 
</body> 
</html>



















