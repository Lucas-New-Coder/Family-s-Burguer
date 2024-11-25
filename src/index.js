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




