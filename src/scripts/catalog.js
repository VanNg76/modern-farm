export const catalog = (array) => {
    let htmlArray = []
    for (let i = 0; i < array.length; i++) {
        for (const elem of array[i]) {
            const plantHTMLSection = `<section class="plant">${elem.type}</section>`
            htmlArray.push(plantHTMLSection)
        }
    }

    return htmlArray
}

