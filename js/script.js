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
form.addEventListener('submit', (event) => {



    

//     var nameValue = nameRef.value;
//     var nameRegex = /^[A-Za-z\s]+$/;
//     var nameRegexTest = nameRegex.test(nameValue);

//     //
//     //console.log(nameValue);
//    //console.log(nameRegexTest);
//     //

    if(nameRegexTest === 'false'/*&& for all required fields*/ ) {

        event.preventDefault()

    }



});

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



