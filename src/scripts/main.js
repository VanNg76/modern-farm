console.log("Welcome to the main module")

// Create a Plan (array of String)
import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// Create a copied Plan (without mutating the original Plan array)
import { usePlants } from './field.js'
const copiedYearlyPlan = usePlants(yearlyPlan)

// Convert Plan (array of strings) to Plan (array of objects)
import { plantSeeds } from './tractor.js'
const plantArray = plantSeeds(copiedYearlyPlan)
console.log(plantArray)

// Create havest Plan array
import { harvestPlants } from './harvester.js'
const havest = harvestPlants(plantArray)
console.log(havest)

// Create HTML sections for website
import { catalog } from './catalog.js'
const displayContent = catalog(havest)
console.log(displayContent)

// document.getElementById("sale").innerHTML = displayContent[0]

// Display sale items
let displayHTMLString = ""
for (let i = 0; i < displayContent.length; i++) {
    displayHTMLString += displayContent[i]
}
document.getElementById("sale").innerHTML = displayHTMLString

