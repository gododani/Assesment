// Get the modal
const modal = document.getElementById('modal');

// Showing the modal
function showLoginModal(){
    modal.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == document.getElementById('closeLoginModal')) {
    modal.style.display = "none";
  }
}
