function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// var baruchLink = document.getElementById('baruch-container')

// baruchLink.addEventListener("click", openBaruch);
// function openBaruch(){ 
//   window.open(
//     "https://www.baruch.cuny.edu/", "_blank");
// };

// var nyuLink = document.getElementById('nyu-container')

// nyuLink.addEventListener("click", openNYU);
// function openNYU(){ 
//   window.open(
//     "https://www.nyu.edu/", "_blank");
// };

let embassyButton = document.getElementById('embassy-button')
let ulEmbassyVisibility = document.getElementById('embassy-list')
embassyButton.addEventListener("click", showEmbassyInfo)
function showEmbassyInfo() {
  

console.log('embassy')
  if(ulEmbassyVisibility.style.display == 'none'){
    ulEmbassyVisibility.style.display = 'block';
  }
  else{
    ulEmbassyVisibility.style.display = 'none'
  }
}

var investingButton = document.getElementById('investing-button')
var ulInvestingVisibility = document.getElementById('investing-list')

investingButton.addEventListener("click", showInvestingInfo)
function showInvestingInfo() {
  

console.log('investing')
  if(ulInvestingVisibility.style.display == 'none'){
    ulInvestingVisibility.style.display = 'block';
  }
  else{
    ulInvestingVisibility.style.display = 'none'
  }
}

var oneParkButton = document.getElementById('one-park-button')
var ulOneParkVisibility = document.getElementById('one-park-list')

oneParkButton.addEventListener("click", showOneParkInfo)
function showOneParkInfo() {
  

console.log('one park')
  if(ulOneParkVisibility.style.display == 'none'){
    ulOneParkVisibility.style.display = 'block';
  }
  else{
    ulOneParkVisibility.style.display = 'none'
  }
}