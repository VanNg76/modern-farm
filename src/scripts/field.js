let seedsAddToPlant = []

export const addPlant = (seedObj) => {
    
    // if (Array.isArray(seedObj) === true) {
    //     seedsAddToPlant.push(seedObj)
    //     seedsAddToPlant.push(seedObj)
    // } else {
    //     seedsAddToPlant.push(seedObj)
    // }    

    return seedsAddToPlant.push(seedObj)
}

// returns a copy of array without mutating original array
export const usePlants = (array) => {
    return JSON.parse(JSON.stringify(array));
}

