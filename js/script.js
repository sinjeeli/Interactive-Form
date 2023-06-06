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
//

