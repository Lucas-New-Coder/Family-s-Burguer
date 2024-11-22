
export const htmlElement = (type,content,eId,eClass) => {
    const element = document.createElement(type)
    element.innerHTML = content
    element.id = eId
    element.classList.add(eClass)
 
     return element
 }