// Slideshow 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function clearErrors() {
  let errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  let element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(event) {
  event.preventDefault();
  let returnval = true;
  clearErrors();

  let name = document.forms['contactForm']["fname"].value;
  if (name.length == 0) {
    seterror("name", "*Please enter your name!");
    returnval = false;
  }
  let email = document.forms['contactForm']["femail"].value.trim();
  if (email.length == 0) {
    seterror("email", "*Please enter your email!");
    returnval = false;
  } else {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      seterror("email", "*Please enter a valid email address. Example: example@example.com (there must be atleast 2 characters after . )");
      returnval = false;
    }
  }

  let message = document.forms['contactForm']["fmsg"].value;
  if (message.length == 0) {
    seterror("message", "*Please enter your message!");
    returnval = false;
  }

  if (returnval) {
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function () {
      location.reload();
    }, 2000);
  }

  return returnval;
}