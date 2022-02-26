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
const closeThanks = document.querySelector('.closeMgs')
const thankMessage = document.getElementById("thank")

const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const birth = document.getElementById('birthdate')
const quantity = document.getElementById('quantity')
const localisation = document.querySelectorAll("input[name='localisation']") 
const conditionCheck = document.getElementById ('checkbox1')
console.log(localisation);
const firstError = document.getElementById('errorFirst');
const lastError = document.getElementById('errorLast');
const emailError = document.getElementById('errorEmail');
const birthDateError = document.getElementById('errorBirth');
const quantityError = document.getElementById('errorQuantity');
const locationsError = document.getElementById('errorRadio');
const conditionError = document.getElementById('errorCondition');



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

    let formIsValid = true;
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value
    let birthValue = birth.value
    let quantityValue = quantity.value
    let emailValue = email.value
    let localisationValue = localisation.value

    const emailFormat = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
    console.log(firstNameValue);

    if ( firstNameValue.length < 2) {
      firstError.style.display = "block";
      formIsValid =false
    }else{
      firstError.style.display = "none";
    }

    if ( lastNameValue.length < 2 ) {
      lastError.style.display = "block";
      formIsValid =false
    }else{
      lastError.style.display = "none";
    }

    if (!emailFormat.test(emailValue)) {
      emailError.style.display ="block";
      formIsValid =false
    }else{
      emailError.style.display = "none";
    }


    let today = new Date()
    console.log(today);

    if (birthValue <= today) {
      birthDateError.style.display ="block"
      formIsValid = false
    }else{
      birthDateError.style.display = "none";
    }

    if (quantityValue.length < 1 ) {
      quantityError.style.display ="block"
      formIsValid = false
    }else{
      quantityError.style.display = "none";
    }
    if(!checkbox1.checked) {
      conditionError.style.display ="block"
      formIsValid = false;
    }else{
      conditionError.style.display = "none";
    }
    
    /*if (!localisation.value (location1 || location2 || location3 || location4 || location5 || location6) ) {
      locationsError.style.display = "block"
      formIsValid =false
    }else{
      locationsError.style.display = "none"
    }

   */

    
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    console.log(birthValue);
    console.log(quantityValue);
    console.log(localisationValue);


    if(formIsValid === true){
      validThanks(e)
    }
  })

//fermerture du message remerciment
closeThanks.addEventListener('click',function () {
  modalbg.style.display = "none"
})

//faire apparaitre le message de remerciment apres submission
function validThanks(e){
  e.preventDefault()
  modalWindow.style.display ="none"
  thankMessage.style.display ="block"
}