console.log("Welcome to the main module")

// Import createPlan from Plan.js
import { createPlan } from './plan.js'

// Invoke createPlan()
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// Copy to new array without mutating original array
import { usePlants } from './field.js'
const copiedYearlyPlan = usePlants(yearlyPlan)

// Import planSeeds
import { planSeeds } from './tractor.js'

// Invoke planSeeds()
const plantArray = planSeeds(copiedYearlyPlan)
console.log(plantArray)

// Import harvestPlants()
import { harvestPlants } from './harvester.js'

// Invoke havestPlants()
const havest = harvestPlants(plantArray)
console.log(havest)





