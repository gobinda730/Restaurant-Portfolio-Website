// To give background color to navbar on scrolling the page

let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {

  if (window.scrollY > 50 && (window.screen.width >576)) {
    navbar.classList.add('navStyle')
  } else {
    navbar.classList.remove('navStyle')
  }

});



// If form is empty then submit button functionality will not Work

let bookingForm = document.getElementById('bookingForm');
let submitBtn = document.getElementById('submitBtn');
let cname = document.getElementById('name');
let date = document.getElementById('date');
let guest = document.getElementById('guest');
let number = document.getElementById('number');

submitBtn.addEventListener('click', function () {

  if ((cname.value != 0) && (date.value != 0) && (guest.value != 0) && (number.value != 0))
  {
    bookingForm.innerHTML = `<div class="row">
    <div class="col-sm-5 col-md-4 col-lg-3 m-auto bg-white py-5 rounded-3 text-center" id="booked">
        <i class="fa-solid fa-circle-check fa-beat text-success display-1 mb-3"></i>
        <h4 class='p-2'>Thank you for booking the Table !!</h4>
    </div>
    </div>`
  }

});