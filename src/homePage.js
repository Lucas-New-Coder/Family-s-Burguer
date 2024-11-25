import { htmlElement } from "./createDomElement"
import catEating from "./catEating.svg"

export const loadHomePage = function () {
    const content = document.querySelector("#content")
    const contentDiv = htmlElement("div", "", "opa", "contentDiv")
    content.innerHTML = ""
    content.appendChild(contentDiv)

    const contentText = htmlElement("p","The purr-fect treat for your furry friend! Our snacks not only make your kitty purr with delight but are specially crafted to support urinary health. Say goodbye to those litter box struggles and hello to a happier, healthier cat! ","","contentText")
    contentDiv.appendChild(contentText)

    const cat = htmlElement("img","","","catEating")
    cat.src = catEating
    contentDiv.appendChild(cat)

    const a = document.createElement("i")
    a.classList.add("fa-solid" ,"fa-arrow-down")
    contentDiv.appendChild(a)
}

 