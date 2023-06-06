// console.log('test');

var nameRef = document.getElementById('name');
console.log(nameRef);

nameRef.focus();
//title is for job role
var title = document.getElementById('title');
console.log(title);
var otherJobRole = document.getElementById('other-job-role');
console.log(otherJobRole);
//
otherJobRole.style.display = "none";
//
title.addEventListener('change', (event) => {


    event.target.value;

    console.log(title);
    console.log(event.target.value);

    if(event.target.value === 'other') {

        otherJobRole.style.display = "block";

    }
    else {

        otherJobRole.style.display = "none";
    }



});
//3 elements
var design = document.getElementById('design');
var color = document.getElementById('color');
var colorOptions = color.children;

console.log(design);
console.log(color);
console.log(colorOptions);
//
color.disabled = true;
//
design.addEventListener('change', (event) => {

    color.disabled = false;
    //
    for(var i = 0; i < colorOptions.length; i++) {

        var eventRef = event.target.value;
       var colorOptions2 = colorOptions[i].getAttribute('data-theme');

        if(eventRef === colorOptions2) {
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', "");
            
        }
        else {
            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute('selected');

        }
    }


    console.log(eventRef)
    console.log(colorOptions)


});
//

var activities = document.getElementById('activities');
var activitiesCost = document.getElementById('activities-cost');
var totalCost =  0;

console.log(activities);
console.log(activitiesCost);
console.log(totalCost);
//////////////////////////////////////////////////////////////////////

activities.addEventListener('change', (event) => {
var dataCostRef = +event.target.getAttribute('data-cost');
console.log(dataCostRef);
console.log(typeof dataCostRef);
//
if(event.target.checked) {
    totalCost += dataCostRef;
    console.log('checked');
}
else{
    totalCost -= dataCostRef;
    console.log('unchecked');
}
console.log(totalCost);

activitiesCost.innerHTML =`Total: $${totalCost}`;

});
//
var payment = document.getElementById('payment');
var creditCard = document.getElementById('credit-card');
var payPal = document.getElementById('paypal');
var bitcoin = document.getElementById('bitcoin');
// console.log(payment);
// console.log(creditCard);
// console.log(payPal);
// console.log(bitcoin);
//
payPal.hidden = true;
bitcoin.hidden = true;
payment.children[1].setAttribute('selected', "");
//1 is the second child element

payment.addEventListener('change', (event) => {

    if(event.target.value === 'paypal') {

        payPal.style.display = "block";
        bitcoin.style.display = "none";
        creditCard.style.display = "none";

    }
    else if(event.target.value === 'bitcoin') {

        payPal.style.display = "none";
        bitcoin.style.display = "block";
        creditCard.style.display = "none";

    }
    else if(event.target.value === 'credit-card') {

        payPal.style.display = "none";
        bitcoin.style.display = "none";
        creditCard.style.display = "block";

    }
});
//HARD SAVE RESET POINT/////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////
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
//

function validateName() {

    var nameValue = nameRef.value;
    var nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(nameValue);


}
//
function validateEmail() {

    var emailValue = email.value;
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(emailValue);
   
}
//
function validateActivities() { 

return activities.querySelectorAll('input[type="checkbox"]:checked').length > 0;

}

function validateCreditCard() {

    var ccNumValue = ccNum.value;
    var ccNumRegex = /^\d{13,16}$/;
    //return ccNumRegex.test(ccNumValue);
    //
    var zipCodeValue = zipCode.value;
    var zipCodeRegex = /^\d{5}$/;
    //return zipCodeRegex.test(zipCodeValue);
    //
    var cvvValue = cvv.value;
    var cvvRegex = /^\d{3}$/;
    //return cvvRegex.test(cvvValue);

    return ccNumRegex.test(ccNumValue) && zipCodeRegex.test(zipCodeValue) && cvvRegex.test(cvvValue);
    }
//




var activityCheckboxes = document.querySelectorAll('#activities input[type="checkbox"]');
activityCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('focus', function (event) {
    event.target.parentElement.classList.add('focus');
  });

  checkbox.addEventListener('blur', function (event) {
    event.target.parentElement.classList.remove('focus');
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
    if (payment.value === 'credit-card' && !validateCreditCard()) {
      event.preventDefault();
      ccNum.parentElement.classList.add('not-valid');
      ccNum.parentElement.classList.remove('valid');
      ccNum.parentElement.lastElementChild.style.display = 'block';
      zipCode.parentElement.classList.add('not-valid');
      zipCode.parentElement.classList.remove('valid');
      zipCode.parentElement.lastElementChild.style.display = 'block';
      cvv.parentElement.classList.add('not-valid');
      cvv.parentElement.classList.remove('valid');
      cvv.parentElement.lastElementChild.style.display = 'block';
    } else {
      ccNum.parentElement.classList.remove('not-valid');
      ccNum.parentElement.classList.add('valid');
      ccNum.parentElement.lastElementChild.style.display = 'none';
      zipCode.parentElement.classList.remove('not-valid');
      zipCode.parentElement.classList.add('valid');
      zipCode.parentElement.lastElementChild.style.display = 'none';
      cvv.parentElement.classList.remove('not-valid');
      cvv.parentElement.classList.add('valid');
      cvv.parentElement.lastElementChild.style.display = 'none';
    }
  });

  //project complete