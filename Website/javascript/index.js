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

// downloading image
function downloadImage(){
  const img = document.getElementsByClassName('active-img');
  const imgPath = img[0].getAttribute('src');
  const fileName = getFileName(imgPath);
  
  saveAs(imgPath, fileName);
}

// Getting the filename from src
function getFileName(str){
  return str.substring(str.lastIndexOf('/')+1);
}
