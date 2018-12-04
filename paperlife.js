
// let div = document.getElementById('btn8')
// div.addEventListener('click', popout);
//
// function popout() {
//     alert('Top Company');
// }
     

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
 
let div = document.getElementById('btn8')
 div.addEventListener('click', popout);

 function popout() {
     alert('Hells Kitchen most Trusted Law Firm call tol Free: 1-800-555-4554');
 }