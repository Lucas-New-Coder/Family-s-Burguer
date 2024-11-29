console.log("cuelho")
import { loadHomePage } from "./homePage.js"
import { loadProducts } from "./products.js"
import { loadAboutUs } from "./aboutUs.js"

import '@fortawesome/fontawesome-free/js/fontawesome'
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./styles.css"
const content = document.querySelector("#content")
const checker = document.getElementById("check")

checker.addEventListener("click", () => {
  content.addEventListener("click", () => {

    if (checker.checked = true) {
      checker.checked = false
    }

  })
})

loadHomePage()

const handleNavClick = () => {
  const checker = document.getElementById("check")



  const btns = document.querySelectorAll("button")
  btns.forEach((btn) => {


    btn.addEventListener("click", () => {

      checker.checked = false

      btns.forEach(btn => btn.classList.remove('selected'));
      setTimeout(() => {
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 50); // 50ms geralmente é suficiente

      if (btn.value === "Home Page") {
        btn.classList.add("selected")
        loadHomePage()
      } if (btn.value === "Products") {
        btn.classList.add("selected")
        loadProducts()
      } if (btn.value === "about") {
        btn.classList.add("selected")
        loadAboutUs()
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
    document.querySelector('.header').classList.add('show');
    document.querySelector('.header').classList.remove('hide');
  } else {
    // user has scrolled down
    document.querySelector('.header').classList.add('hide');
    document.querySelector('.header').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

