var header = document.getElementById("navbarNav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", function navHighlighter() {
  
    // Get current scroll position
    let scrollY = window.pageYOffset;
    
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");
      
      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  );


  window.addEventListener("scroll",() => {
    const header=document.querySelector(".navbar");
    if (window.scrollY > 0) {
        header.classList.add("fixed-top");
        header.classList.remove("d-none"); 
    }else {
        header.classList.remove("fixed-top");
        header.classList.add("d-none"); 
    }
});


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `<span> Created By 0marleves </span> &copy; ${Year}`