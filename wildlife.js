/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print 
// sightings of different animals within the sanctuary. 
// This function should accept an arbitrary number of 
// animal names.

function trackSightings(...animals) {
    console.log("Animal Sightings:");
    animals.forEach(animal => {
        console.log(animal);
    });
}

// Test
trackSightings("Lion", "Elephant", "Giraffe", "Zebra");



/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const allHabitats = [...forestHabitats, ...savannahHabitats];
console.log(allHabitats)




/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};

const updatedRhinoStatus = {
    ...rhinoStatus,
    population: 550,
    habitat: "Protected Reserve"
};

console.log(updatedRhinoStatus);

// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.



/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
const lionCopy = {
    ...lionProfile,
    genetics: {
        diversity: "High"
    }
};

console.log(lionCopy);

// Modify nested property
lionCopy.genetics.diversity = "Low";

console.log(lionProfile);
console.log(lionCopy);

// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */



/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

const ecosystemCopy = {
    ...ecosystemHealth
};

// Modify nested property
ecosystemCopy.foodSupply.herbivores = "Scarce";

console.log(ecosystemHealth);
console.log(ecosystemCopy);
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */
