console.log("cuelho")
import { loadHomePage } from "./homePage.js"
import { loadProducts } from "./products.js"
import '@fortawesome/fontawesome-free/js/fontawesome'
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./styles.css"


loadHomePage()
const handleNavClick = () => {



  const btns = document.querySelectorAll("button")
  btns.forEach((btn) => {
    /* let selected = document.getElementsByClassName("selected") */


    btn.addEventListener("click", () => {

      btns.forEach(btn => btn.classList.remove('selected'));
      globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });

      if (btn.value === "Home Page") {
        btn.classList.add("selected")
        loadHomePage()
      } if (btn.value === "Products") {
        btn.classList.add("selected")
        loadProducts()
      }
    })
  })
}

handleNavClick()



// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.navbar').classList.add('show');
    document.querySelector('.navbar').classList.remove('hide');
  } else {
    // user has scrolled down
    document.querySelector('.navbar').classList.add('hide');
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

