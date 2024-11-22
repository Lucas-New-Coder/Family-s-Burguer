console.log("cuelho")
import { loadHomePage } from "./homePage.js"
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




