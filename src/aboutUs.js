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

    const aboutUsMain = htmlElement("p","Somos um casal apaixonado por gatos e dedicados a trazer o melhor do mundo felino para o seu gatinho também. Fazemos questão de estar presentes durante toda produção de nossos produtos e só entregar o melhor para vocês. Esse projeto teve inicio após a perda do nosso gato Scar por obstrução urinaria, por isso focamos em produtos que ajudam os seus felinos nesse aspecto","","aboutUsMain")
    aboutUsContent.appendChild(aboutUsMain)

    const myFamily = htmlElement("img","","","myFamily")
    myFamily.src = myFamilyImg
    aboutUsContent.appendChild(myFamily)

}