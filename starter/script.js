'use strict';


const buttonIcon = document.querySelectorAll('.btn-icon');
const message = document.querySelector('.message');
const buttonExit = document.querySelector('.close-up');
const blurRay = document.querySelector('.blur');
// const show = 
const ext = function() {
    message.classList.add('pop');
    blurRay.classList.add('pop');
  }
const outsideBox = function() {
    message.classList.add('pop');
    blurRay.classList.add('pop');
  }


for (let i = 0; i < buttonIcon.length; i++) { 
  buttonIcon[i].addEventListener('click', function() {
    message.classList.remove('pop');
    blurRay.classList.remove('pop');
})

  buttonExit.addEventListener('click', ext)

  blurRay.addEventListener('click', outsideBox);

  document.addEventListener('keydown', function(e) {
    // console.log(e);
    if (e.key === 'Escape') {
      if (!message.classList.contains('pop')) {
        ext ();
      }
    }
  })
}

