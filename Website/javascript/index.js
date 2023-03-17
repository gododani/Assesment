function openNav() {
    document.getElementById("sidenav").classList.toggle("open");
  }

function closeNav() {
  document.getElementById("sidenav").classList.remove("open");
  // remove event listener from window
  window.removeEventListener("click", closeNavOnClickOutsideOrX);
}

function closeNavOnClickOutsideOrX(event) {
  // check if target element is the X icon or its parent element
  if (event.target.closest(".sidenav-close")) {
    closeNav();
  }
}
