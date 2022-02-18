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
const modalWindow = document.querySelector('.modal-body')
const thankMessage = document.getElementById("thank")
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const birth = document.getElementById('bithdate')
const radio = document.getElementById('quantity')

console.log(firstName);
console.log(lastName);
console.log(btnSubmit);


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

  btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
    modalWindow.classList.remove('formData')
    thankMessage.style.display = 'block'
  })


