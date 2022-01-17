export const catalog = (array) => {
    let htmlArray = []
    
    for (let i = 0; i < array.length; i++) {
            const plantHTMLSection = `<section class="plant">${array[i].type}</section>`
            htmlArray.push(plantHTMLSection)
    }

    return htmlArray
}

