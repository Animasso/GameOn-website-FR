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
const localisation = document.querySelectorAll("input[name='location']:checked")
const conditionCheck = document.getElementById ('checkbox1')

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
  modalWindow.style.display = "block";
  thankMessage.style.display ="none"
  modalWindow.reset()
  })


 //gestion de la validation en cas d'erreur  


modalWindow.addEventListener('submit',(e) => {
    e.preventDefault();
//creation de variable pour stocker les valeurs du formulaire
    let formIsValid = true;
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value
    let birthValue = birth.value
    let quantityValue = quantity.value
    let emailValue = email.value
    let localisation = document.querySelectorAll("input[name='location']:checked")
    const emailFormat = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
   
//gestion erreur premon
    if ( firstNameValue.length < 2) {
      firstError.style.display = "block";
      formIsValid =false
    }else{
      firstError.style.display = "none";
    }

//gestion erreur nom
    if ( lastNameValue.length < 2 ) {
      lastError.style.display = "block";
      formIsValid =false
    }else{
      lastError.style.display = "none";
    }

//gestion erreur email
    if (!emailFormat.test(emailValue)) {
      emailError.style.display ="block";
      formIsValid =false
    }else{
      emailError.style.display = "none";
    }

//gestion erreur birthday
    if (birthValue == ''){
      birthDateError.style.display ="block"
      formIsValid = false
    }
    else{
      birthDateError.style.display = "none";
    }
    
//gestion erreur nombre de participation
    if (quantityValue.length <= 0 ) {
      quantityError.style.display ="block"
      formIsValid = false
    }else{
      quantityError.style.display = "none";
    }
//gestion erreur location
    if (location1.checked || location2.checked ||location3.checked || location4.checked || location5.checked || location6.checked){
      locationsError.style.display = "none"
    }else{
      locationsError.style.display = "block"
      formIsValid =false
    }
//gestion erreur validation condition
    if(!checkbox1.checked) {
      conditionError.style.display ="block"
      formIsValid = false;
    }else{
      conditionError.style.display = "none";
    }
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    console.log(birthValue);
    console.log(quantityValue);
    console.log(localisation);

//si il n'y a aucune erreur  la fonction validThanks et appelée
    if(formIsValid === true){
      validThanks(e)
    }
  })

//faire apparaitre le message de remerciment apres submission
function validThanks(e){
  e.preventDefault()
  modalWindow.style.display ="none"
  thankMessage.style.display ="block"
}

//fermerture du message remerciment et reset du formulaire sans les valeurs
  closeThanks.addEventListener('click',function () {
  modalbg.style.display = "none"
  modalWindow.style.display = "block";
  thankMessage.style.display ="none"
  modalWindow.reset()
})

