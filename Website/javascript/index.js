const sidenav = document.getElementById("sidenav");
const slider = document.getElementById("slider");
const leftArrow = document.getElementById("left");

function openNav() {
  if(sidenav.style.width === "150px"){
    closeNav();
  } else{
    sidenav.style.width="150px";
    sidenav.style.zIndex="1";
    sidenav.style.opacity="1";
    slider.style.marginLeft="150px";
    leftArrow.style.left="160px";
  }
}

function closeNav() {
  sidenav.style.width="0";
  sidenav.style.zIndex="0";
  sidenav.style.opacity="0";  
  slider.style.marginLeft="0";
  leftArrow.style.left="10px";
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

const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('login');
const loginName = urlParams.get('name');

const succesfulLogin = `<div class='login' style='position: absolute; z-index: 10;left: 50%;transform: translateX(-50%);top: 150px;background: rgba(0,255,0,1);border-radius: 1rem;padding: 1rem;width: 200px; padding: 2rem;'> Login succesful as ${loginName}<span style='right: 10px;position: absolute;font-size: 25px;top: 50%;transform: translateY(-50%);cursor: pointer;' onclick='closeLoginInfo()'>&times;</span></div>`;
const failedLogin = `<div class='login' style='position: absolute; z-index: 10;left: 50%;transform: translateX(-50%);top: 150px;background: rgba(255,0,0,1);border-radius: 1rem;padding: 1rem;width: 200px;' padding: 2rem;'> Login failed <span style='position: absolute;right: 10px;font-size: 25px;top: 50%;transform: translateY(-50%);cursor: pointer;' onclick='closeLoginInfo()'>&times;</span></div>`;

if (data =="succesful") document.getElementById('loginInfo').innerHTML = succesfulLogin;
if (data == "failed") document.getElementById('loginInfo').innerHTML = failedLogin;

function closeLoginInfo(){
  document.getElementById('loginInfo').style.display = 'none';
  document.location.href="/";
}