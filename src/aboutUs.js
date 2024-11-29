import { htmlElement } from "./createDomElement"
import myFamilyImg from "./myFamilyCats.svg"


export const loadAboutUs = function () {
    const content = document.querySelector("#content")
    content.innerHTML = ""

    const aboutUsMainContainer = htmlElement("div", "", "", "aboutUsMainContainer")
    content.appendChild(aboutUsMainContainer)

    const aboutUsContent = htmlElement("div","","","aboutUsContent")
    aboutUsMainContainer.appendChild(aboutUsContent)

    const aboutUsTitle = htmlElement("h1","About us","","aboutUsTitle")
    aboutUsContent.appendChild(aboutUsTitle)

    const aboutUsMain = htmlElement("p","We are a couple passionate about cats and dedicated to bringing the very best of the feline world to your furry friend. We take pride in being involved in every step of the production process to ensure we deliver nothing but the highest quality to you.This project began after the heartbreaking loss of our cat, Scar, to urinary obstruction. That’s why we focus on creating products that support your cat's health, especially in this vital aspect.","","aboutUsMain")
    aboutUsContent.appendChild(aboutUsMain)

    const myFamily = htmlElement("img","","","myFamily")
    myFamily.src = myFamilyImg
    aboutUsContent.appendChild(myFamily)

}