import { htmlElement } from "./createDomElement"
import meowMixers from "./meowMixers.svg"
import mightyMeowMorsels from "./mightyMeowMorsels.svg"
import catMeal from "./catMeal.svg"
import tailTwisters from "./tailTwisters.svg"

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

    const pMeowMsixers = productsCreator("Meow Mixers","R$19,99",meowMixers)
    const pMightsyMeowMorsels = productsCreator("Mighty Meow Morsels","R$24,00",mightyMeowMorsels)
    const pCatMseal = productsCreator("Cat Meal","R$52,90",catMeal)
    const s = productsCreator("Tail Twisters","R$8,50",tailTwisters)


}