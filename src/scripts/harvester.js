import { addPlant } from "./field.js"

export const harvestPlants = (plantArray) => {
    let seedObjArray = []
    for (let i = 0; i < plantArray.length; i++) {
        for (const seedObj of plantArray[i]) {
            if (seedObj.type === "Corn") {
                seedObjArray.push(addPlant(seedObj))
                seedObjArray.push(addPlant(seedObj))
            } else {
                seedObjArray.push(addPlant(seedObj))
            }
        }
    }

    return seedObjArray
}