import { htmlElement } from "./createDomElement"
import catEating from "./catEating.svg"

export const loadHomePage = function () {
    const content = document.querySelector("#content")
    const contentDiv = htmlElement("div", "", "opa", "contentDiv")
    content.innerHTML = ""
    content.appendChild(contentDiv)


    const contentDivMainContainer = htmlElement("div", "", "", "contentDivMainContainer")
    contentDiv.appendChild(contentDivMainContainer)

    const contentText = htmlElement("p", "The purr-fect treat for your furry friend! Our snacks not only make your kitty purr with delight but are specially crafted to support urinary health. Say goodbye to those litter box struggles and hello to a happier, healthier cat! ", "", "contentText")
    contentDivMainContainer.appendChild(contentText)

    const cat = htmlElement("img", "", "", "catEating")
    cat.src = catEating
    contentDivMainContainer.appendChild(cat)

    const menuButton = htmlElement("button", "Menu", "", "menuButton")
    contentDiv.appendChild(menuButton)
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-utensils");
    menuButton.prepend(icon)

    const whyCatSnack = htmlElement("h1", "Why Your Cat Deserve a Cat Snack?", "", "Tittle")
    content.appendChild(whyCatSnack)

    const homePageInfo = htmlElement("div","","","homePageInfo")
    
    content.appendChild(homePageInfo)

    const info1 = htmlElement("div","","info1","info")
    content.appendChild(info1)
    const infto1TextContainer = htmlElement("div","","","infto1TextContainer")
    info1.appendChild(infto1TextContainer)
    const infoTittle1 = htmlElement("h2","Taste So Good, They’ll Think They’re Royalty","","infoTittle")
    infto1TextContainer.appendChild(infoTittle1)
    const infoText1 = htmlElement("p","Crafted with flavors cats go wild for, Cat Snack makes them feel like the king or queen of the castle (as if they didn’t already).","","infoText")
    infto1TextContainer.appendChild(infoText1)



    const info2 = htmlElement("div","","info2","info")
    content.appendChild(info2)
    const infto2TextContainer = htmlElement("div","","","infto2TextContainer")
    info2.appendChild(infto2TextContainer)
    const infoTittle2 = htmlElement("h2","Say Bye to Bathroom Drama","","infoTittle")
    infto2TextContainer.appendChild(infoTittle2)
    const infoText2 = htmlElement("p","Help your furry overlord (ahem, cat) keep their urinary tract in top shape—because a happy bladder means fewer vet trips for you!.","","infoText")
    infto2TextContainer.appendChild(infoText2)

    const info3 = htmlElement("div","","info3","info")
    content.appendChild(info3)
    const infto3TextContainer = htmlElement("div","","","infto3TextContainer")
    info3.appendChild(infto3TextContainer)
    const infoTittle3 = htmlElement("h2","Nutrients Packed, Love Approved","","infoTittle")
    infto3TextContainer.appendChild(infoTittle3)
    const infoText3 = htmlElement("p","With all the extra vitamins and minerals, you’re basically giving your cat a spa day in snack form. They’re worth it, right?.","","infoText")
    infto3TextContainer.appendChild(infoText3)


    homePageInfo.append(info1,info2,info3)
}

  

    

