// Import create seed functions
import {createCorn} from "./seeds/corn.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createSoybean} from "./seeds/soybean.js"
import {createPotato} from "./seeds/potato.js"
import {createWheat} from "./seeds/wheat.js"
import {createSunflower} from "./seeds/sunflower.js"

export const planSeeds = (yearPlan) => {
    let tempArray = yearPlan.slice()
     for (let i = 0; i < yearPlan.length; i++) {
         for (let j = 0; j < yearPlan[i].length; j++) {
            switch (yearPlan[i][j]) {
                case "Corn":
                    tempArray[i][j] = createCorn()
                    break;
                case "Asparagus":
                    tempArray[i][j] = createAsparagus()
                    break;
                case "Soybean":
                    tempArray[i][j] = createSoybean()
                    break;
                case "Potato":
                    tempArray[i][j] =createPotato()
                    break;
                case "Wheat":
                    tempArray[i][j] = createWheat()
                    break;
                case "Sunflower":
                    tempArray[i][j] = createSunflower()
                    break;
            }
         }
     }
     return tempArray;                            
}