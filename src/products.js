import { htmlElement } from "./createDomElement"
import meowMixers from "./meowMixers.svg"
import mightyMeowMorsels from "./mightyMeowMorsels.svg"
import catMeal from "./catMeal.svg"
import tailTwisters from "./tailTwisters.svg"
import catSnackBlue from "./catSnackBlue.svg"
import catFish from "./catFish.svg"
import wayTooReal from "./wayTooReal.svg"

import teste2 from "./teste2.svg"




export const loadProducts = function () {
    const content = document.querySelector("#content")
    content.innerHTML = ""

    const productsTittle = htmlElement("h1","Our Products","","productsTittle")
    content.appendChild(productsTittle)

    const productsContainer = htmlElement("div","","","productsContainer")
    content.appendChild(productsContainer)

    const productsCreator = (productName,productPrice,imgSrc) =>{


        const product = htmlElement("div","","","product")
        productsContainer.appendChild(product)

        const productImage = htmlElement("img","","","productImage")
        productImage.src = imgSrc
        product.appendChild(productImage)

        const productInfo = htmlElement("div","","","productInfo")
        product.appendChild(productInfo)
        
        const productNameTittle = htmlElement("p",productName,"","productNameTittle")
        
        
        const productPriceValue = htmlElement("p",productPrice,"","productPrice")
        
        productInfo.appendChild(productNameTittle)
        productInfo.appendChild(productPriceValue)


        return product
    }

    const pMeowMixers = productsCreator("Meow Mixers","R$19,99",meowMixers)
    const pMightyMeowMorsels = productsCreator("Mighty Meow Morsels","R$24,00",mightyMeowMorsels)
    const pCatMeal = productsCreator("Cat Meal","R$52,90",catMeal)
    const pTailTwisters = productsCreator("Tail Twisters","R$8,50",tailTwisters)

    const PcatSnackPremium = productsCreator("Cat Snack Premium","R$99,99",catSnackBlue)
    const pCatFish = productsCreator("Cat Fish","R$24,00",catFish)
    const pWayTooReal = productsCreator("Way too Real","R$42,00",wayTooReal)



    const contact = htmlElement("div","","","contact")
    content.appendChild(contact)

    const notSure = htmlElement("h1","Not Sure which one is perfect for you cat?","","notSure")
    contact.appendChild(notSure)

    const contactContainer = htmlElement("div","","","contactContainer")
    contact.appendChild(contactContainer)

    const contactInfo = htmlElement("p","Our cat lonving crew are always ready to help you chose the right Snack for your cat, so, let's have a chat about a Cat Snack<br><br> <b>(31) 90000-0000</b>","","contactInfo")
    contactContainer.appendChild(contactInfo)
}