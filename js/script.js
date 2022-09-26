// Functions for Regeister page
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// The message box at the password field 
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// Validate password function
myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

// Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

// Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

// Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    } 
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    }
}

// Functions in order page
function addressFunction() {
  if (document.getElementById("SameAddress").checked) {
    document.getElementById("secondaryaddress").value = document.getElementById("primaryaddress").value;
    document.getElementById("secondaryzip").value = document.getElementById("primaryzip").value;
  } 
  else {
    document.getElementById("secondaryaddress").value = "";
    document.getElementById("secondaryzip").value = "";
  }
}

//Choose the delivery method
function CheckDelivery(val){
  if (val==="Pickup") {
    document.getElementById('Pickup').style.display='inherit';
    document.getElementById('Delivery').style.display='none';
  }
  else if (val==="Delivery") {
    document.getElementById('Delivery').style.display='inherit';
    document.getElementById('Pickup').style.display='none'; 
  }
  else {
    document.getElementById('Pickup').style.display='none'; 
    document.getElementById('Delivery').style.display='none'; 
  }
} 

//Validate the payment
function CheckPay(val){
  if (val==="CreditCards")
    document.getElementById('CreditCards').style.display='block';
  else
    document.getElementById('CreditCards').style.display='none'; 
    } 

//Show/ hide Credit cards and VISA and MC are 16 numbers, American Express with 15 numbers
function CheckCards(val){
  if (val==="VISA" || val==="MasterCard") {
    document.getElementById('CardNumb').style.display='block';
    document.getElementById('CardNumb2').style.display='none';
  } 
  else if (val==="AE" ) {
    document.getElementById('CardNumb2').style.display='block';
    document.getElementById('CardNumb').style.display='none';
  }
  else {
    document.getElementById('CardNumb').style.display='none';
    document.getElementById('CardNumb2').style.display='none';
    }
  }
