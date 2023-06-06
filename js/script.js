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

