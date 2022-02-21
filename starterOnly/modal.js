function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close")
const btnSubmit = document.querySelector(".btn-submit");
const modalWindow = document.getElementById('reserve')
const thankMessage = document.getElementById("thank")

const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const birth = document.getElementById('bithdate')
const radio = document.getElementById('quantity')
const closeThanks = document.querySelector('.closeMgs')

const firstError = document.getElementById('errorFirst');
const lastError = document.getElementById('errorLast');
const emailError = document.getElementById('errorEmail');
const birthdateError = document.getElementById('errorBirth');
const quantityError = document.getElementById('errorSelect');
const locationsError = document.getElementById('errorRadio');
const conditionError = document.getElementById('errorCondition');

console.log(firstName);
console.log(lastError);
console.log(emailError);
console.log(birthdateError);
console.log(quantityError);
console.log(locationsError);
console.log(conditionError);













// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
  close.addEventListener("click",function(){
  modalbg.style.display = "none";
  })

  






modalWindow.addEventListener('submit',(e) => {
    e.preventDefault();
    let firstIsValid = false;
    const firstNameValue = firstName.value;
    console.log(firstNameValue);

    if (firstNameValue != '' && firstNameValue.length >= 2) {
      firstIsValid = true;
    } else {
      firstError.style.display = "block";
    }


  })

//fermerture du message remerciment
closeThanks.addEventListener('click',function () {
  modalbg.style.display = "none"
})

//faire apparaitre le message de remerciment apres submission
btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault()
  
  modalWindow.style.display ="none"
  thankMessage.style.display ="block"
})