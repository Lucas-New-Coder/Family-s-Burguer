console.log("cuelho")
import { loadHomePage } from "./homePage.js"
import '@fortawesome/fontawesome-free/js/fontawesome'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { teste1 } from "./teste1.js"
import "./styles.css"


loadHomePage()
const handleNavClick = () => {
    const btns = document.querySelectorAll("button")
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.innerHTML === "teste1") {
                teste1()
            }else{
                loadHomePage()
            }
        })
    })
}

handleNavClick()



// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
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

