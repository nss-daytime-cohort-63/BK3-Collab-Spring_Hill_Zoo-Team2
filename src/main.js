/* 
  Goals of project:
    1. Header for each exhibit of the zoo
    2. Under header list all animals in that exhibit
    3. As an aside on the right, list all concessions
    4. Main header at top with "Welcome to Spring Hill Zoo"
*/


/* 
  Module Responsibility:
    1. Update the DOM with *all* of the HTML
    2. Defer creation of specific sections to other modules
*/

// Export animal getter function in database.js and import it to main.js
import { getAnimals, getExhibits, getConcessions } from "./database.js"

  // Declare a variable to store the array of exhibits.
  const animals = getAnimals()
  const exhibits = getExhibits()
  const concessions = getConcessions()
// Create a function to return an HTML String. 
const HTMLString = () => {
  // Declare the HTML variable with the value of an empty string.
  let innerHTML = ""
  // Iterate through the array of exhibits with a for of loop.
  for (const exhibit of exhibits) {
    // For each item in the array, add the exhibit.name in a header tag to the HTML String.
    innerHTML += `<h2>${exhibit.name}</h2>` 
  } 
  // Return HTML String.
return innerHTML

}

const parentHTMLElement = document.querySelector("#container")


parentHTMLElement.innerHTML = HTMLString()