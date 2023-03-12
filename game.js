// Smooth scroll to anchor links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});



// Form submission confirmation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Code to submit the form data and handle the response goes here

  const confirmationMsg = document.createElement('p');
  confirmationMsg.textContent = 'Thank you for your message. We will get back to you soon.';
  form.appendChild(confirmationMsg);

  // Clear form fields
  form.reset();
});

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
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


