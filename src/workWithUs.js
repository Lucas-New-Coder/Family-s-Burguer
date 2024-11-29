import { htmlElement } from "./createDomElement"


export const loadWorkWithUs = function () {
    const content = document.querySelector("#content")
    content.innerHTML = ""

    const workContainerContainer = htmlElement("div","","","workContainerContainer")
    content.appendChild(workContainerContainer)


    const workWithUsContainer = htmlElement("div","","","workContainer")
    workContainerContainer.appendChild(workWithUsContainer)

    const workWithUsTittle = htmlElement("h1","Wanna Work With us?","","workTittle")
    workWithUsContainer.appendChild(workWithUsTittle)

    const workWithUsInfo = htmlElement("p","Unfortunally, we're not hiring right now, but fell free to help our cause, you can email us at welovecats@pawns.com","","workInfo")
    workWithUsContainer.appendChild(workWithUsInfo)


}