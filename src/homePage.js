import { htmlElement } from "./createDomElement"
import homePageImage from "./homePageImage.svg"

export const loadHomePage = function () {
    const content = document.querySelector("#content")
    const teste = htmlElement("div", "", "opa", "teste")
    content.innerHTML = ""
    content.appendChild(teste)

}