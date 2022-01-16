
let allPlants = []

export const addPlant = (seedObj) => {
    allPlants.push(seedObj)
    return allPlants
}

// returns a copy of array without mutating original array
export const usePlants = (array) => {
    return JSON.parse(JSON.stringify(array));
}

