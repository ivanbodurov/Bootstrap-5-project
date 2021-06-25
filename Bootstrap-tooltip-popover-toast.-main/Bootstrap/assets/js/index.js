// $(document).ready(function(){
//   $('[data-bs-toggle="popover"]').popover();
//   $('[data-bs-toggle="tooltip"]').tooltip();
//   $('#liveToastBtn').click(function() {
//     $('.toast').toast('show');
//   });
// });

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Toast
let option = {
  animation: true,
  autohide: true,
  delay: 4000
}

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
});

function toast() {
  toastList.forEach((item) => {
    item.show();
    });
}
