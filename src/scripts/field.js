
let allPlants = []

export const addPlant = (seedObj) => {
    if (seedObj.type === "Corn") {
        allPlants.push(seedObj)
        allPlants.push(seedObj)        
    } else {
        allPlants.push(seedObj)
    }
    
    return allPlants
}

// returns a copy of array without mutating original array
export const usePlants = (array) => {
    return JSON.parse(JSON.stringify(array));
}

