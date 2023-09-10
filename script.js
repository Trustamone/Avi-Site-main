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

var baruchLink = document.getElementById('baruch-container')

baruchLink.addEventListener("click", openBaruch);
function openBaruch(){ 
  window.open(
    "https://www.baruch.cuny.edu/", "_blank");
};

var nyuLink = document.getElementById('nyu-container')

nyuLink.addEventListener("click", openNYU);
function openNYU(){ 
  window.open(
    "https://www.nyu.edu/", "_blank");
};