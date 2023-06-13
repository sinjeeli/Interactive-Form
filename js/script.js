// console.log('test');

var nameRef = document.getElementById('name');
console.log(nameRef);
//get name id

nameRef.focus();
//title is for job role
var title = document.getElementById('title');
console.log(title);
var otherJobRole = document.getElementById('other-job-role');
console.log(otherJobRole);
//for other job role field
otherJobRole.style.display = "none";
//dont display it by default
title.addEventListener('change', (event) => {
//when job role selection is changed

    event.target.value;

    console.log(title);
    console.log(event.target.value);
    //for testing

    if(event.target.value === 'other') {
//display if other field is selected
        otherJobRole.style.display = "block";

    }
    else {

        otherJobRole.style.display = "none";
    }



});
//3 elements
var design = document.getElementById('design');
//target design id
var color = document.getElementById('color');
//target color id
var colorOptions = color.children;
//target color.children to get the different color choices
console.log(design);
console.log(color);
console.log(colorOptions);
//
color.disabled = true;
//disable by default
design.addEventListener('change', (event) => {

    color.disabled = false;
    //enable color to allow user to make necessary color selections
    for(var i = 0; i < colorOptions.length; i++) {
//iterate through each color option
        var eventRef = event.target.value;
        //store the value of the color selection
       var colorOptions2 = colorOptions[i].getAttribute('data-theme');
//checks to see if the selected color option has the 'data-theme' attribute
        if(eventRef === colorOptions2) {
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', "");
            //updates the attribute value 
        }
        else {
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute('selected');
            //removes the atribute value

        }
    }


    console.log(eventRef)
    console.log(colorOptions)
// testing

});
//

var activities = document.getElementById('activities');
var activitiesCost = document.getElementById('activities-cost');
//target activities and the cost
var totalCost =  0;
//intial value is 0

console.log(activities);
console.log(activitiesCost);
console.log(totalCost);
//////////////////////////////////////////////////////////////////////

activities.addEventListener('change', (event) => {
var dataCostRef = +event.target.getAttribute('data-cost');
//store data cost and convert to a number
console.log(dataCostRef);
console.log(typeof dataCostRef);
//test
if(event.target.checked) {
    totalCost += dataCostRef;
    console.log('checked');
    //add the cost of the checked to the total
}
else{
    totalCost -= dataCostRef;
    console.log('unchecked');
    //subtract cost if unchecked
}
console.log(totalCost);

activitiesCost.innerHTML =`Total: $${totalCost}`;
//to display the total amount

});
//
var payment = document.getElementById('payment');
var creditCard = document.getElementById('credit-card');
var payPal = document.getElementById('paypal');
var bitcoin = document.getElementById('bitcoin');
//targeting the payment options

// console.log(payment);
// console.log(creditCard);
// console.log(payPal);
// console.log(bitcoin);
//
payPal.hidden = true;
bitcoin.hidden = true;
//set to hidden by default


payment.children[1].setAttribute('selected', "");
//1 is the second child element

payment.addEventListener('change', (event) => {

    if(event.target.value === 'paypal') {
//if paypal is selected display and hide all others
        payPal.style.display = "block";
        bitcoin.style.display = "none";
        creditCard.style.display = "none";

    }
    else if(event.target.value === 'bitcoin') {
//if bitcoin is target displayed, and hide all others
        payPal.style.display = "none";
        bitcoin.style.display = "block";
        creditCard.style.display = "none";

    }
    else if(event.target.value === 'credit-card') {
// if credit card is displayed, hide all others
        payPal.style.display = "none";
        bitcoin.style.display = "none";
        creditCard.style.display = "block";

    }
});

//console.log(nameRef);
// console.log(email);
// console.log(activities);
// console.log(ccNum);
// console.log(zipCode);
// console.log(cvv);
// console.log(form);

var email = document.getElementById('email');
var ccNum = document.getElementById('cc-num');
var zipCode = document.getElementById('zip');
var cvv = document.getElementById('cvv');
var form = document.querySelector('form');
//target the required fields 
//

function validateName() {

    var nameValue = nameRef.value;
    var nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(nameValue);
//helper function to check if the name fits the assigned regex

}
//
function validateEmail() {

    var emailValue = email.value;
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(emailValue);
   //helper function to check if the email fits the assigned regex

}
//
function validateActivities() { 

return activities.querySelectorAll('input[type="checkbox"]:checked').length > 0;
//check to see if at least 1 activity has been checked 
}

function ccNumValue() {
//checks to see if all required fields match the regex assigned
    var ccNumValue = ccNum.value;
    var ccNumRegex = /^\d{13,16}$/;


    return ccNumRegex.test(ccNumValue);
    }
//
function zipCodeValue() {
  //checks to see if all required fields match the regex assigned

  
      var zipCodeValue = zipCode.value;
      var zipCodeRegex = /^\d{5}$/;

  
      return zipCodeRegex.test(zipCodeValue);
      }

      function cvvValue() {
        //checks to see if all required fields match the regex assigned
            var cvvValue = cvv.value;
            var cvvRegex = /^\d{3}$/;
        
        
            return cvvRegex.test(cvvValue);
            }



var activityCheckboxes = document.querySelectorAll('#activities input[type="checkbox"]');
activityCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('focus', function (event) {
    event.target.parentElement.classList.add('focus');
    //assigning focus to the required fields
  });

  checkbox.addEventListener('blur', function (event) {
    event.target.parentElement.classList.remove('focus');
    //assign blur
  });
});


///////////////////////////////////////////
form.addEventListener('submit', function (event) {
  // Validate the Name field
  if (!validateName()) {
    event.preventDefault();
    nameRef.parentElement.classList.add('not-valid');
    nameRef.parentElement.classList.remove('valid');
    nameRef.parentElement.lastElementChild.style.display = 'block';
  } else {
    nameRef.parentElement.classList.remove('not-valid');
    nameRef.parentElement.classList.add('valid');
    nameRef.parentElement.lastElementChild.style.display = 'none';
  }

  // Validate the Email Address field
  if (!validateEmail()) {
    event.preventDefault();
    email.parentElement.classList.add('not-valid');
    email.parentElement.classList.remove('valid');
    email.parentElement.lastElementChild.style.display = 'block';
  } else {
    email.parentElement.classList.remove('not-valid');
    email.parentElement.classList.add('valid');
    email.parentElement.lastElementChild.style.display = 'none';
  }

  // Validate the Register for Activities section
  if (!validateActivities()) {
    event.preventDefault();
    activities.classList.add('not-valid');
    activities.classList.remove('valid');
    activities.lastElementChild.style.display = 'block';
  } else {
    activities.classList.remove('not-valid');
    activities.classList.add('valid');
    activities.lastElementChild.style.display = 'none';
  }

  // Validate the Credit Card section (if selected)
  if (payment.value === 'credit-card') {
    if (!ccNumValue()) {
      event.preventDefault();
      ccNum.parentElement.classList.add('not-valid');
      ccNum.parentElement.classList.remove('valid');
      ccNum.parentElement.lastElementChild.style.display = 'block';
    } else {
      ccNum.parentElement.classList.remove('not-valid');
      ccNum.parentElement.classList.add('valid');
      ccNum.parentElement.lastElementChild.style.display = 'none';
    }

    if (!zipCodeValue()) {
      event.preventDefault();
      zipCode.parentElement.classList.add('not-valid');
      zipCode.parentElement.classList.remove('valid');
      zipCode.parentElement.lastElementChild.style.display = 'block';
    } else {
      zipCode.parentElement.classList.remove('not-valid');
      zipCode.parentElement.classList.add('valid');
      zipCode.parentElement.lastElementChild.style.display = 'none';
    }

    if (!cvvValue()) {
      event.preventDefault();
      cvv.parentElement.classList.add('not-valid');
      cvv.parentElement.classList.remove('valid');
      cvv.parentElement.lastElementChild.style.display = 'block';
    } else {
      cvv.parentElement.classList.remove('not-valid');
      cvv.parentElement.classList.add('valid');
      cvv.parentElement.lastElementChild.style.display = 'none';
    }
  }
});

// ...

  //project complete