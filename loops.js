console.log("Creating Funcations to for a count down and counting up:\n")
const countDown = number => {
    for (let i = number; i >= 1; i--){
    console.log(i)
  }
}
  
  countDown(10)

  console.log("___________________________________\n")

const countUp = number => {
    for (let i = number; i < 11; i++){
        console.log(i)
    }
}

countUp(1)

console.log("___________________________________\n")

console.log("Finding mutual followers between two users:\n")
let bobsFollowers = ["Ahkiel", "Will","Dajon","Sheef"] // 4 users 
let tinasFollowers = ["Ahkiel","Will", "Randy"] // three users - two the same and one different
let muturalFollowers = [] // an empty array (hint: we need to push data into this empty array)
/*
    • first we want to loop through both user's followers to have the data accessible to be used. (hint: nested loop to compare two or more arrays)
    • second we want to create a condition to find the mutual follower
    • third we want to put the mutural followers into a new array  
*/
for (let i = 0; i < bobsFollowers.length; i++){ 
    for (let j = 0; j <tinasFollowers.length; j++){
        if (bobsFollowers[i] === tinasFollowers[j]){
            muturalFollowers.push(bobsFollowers[i]) // bobs followers are the primary 
        }
    }
}

console.log(muturalFollowers)

console.log("___________________________________\n")

console.log("Looping through cards untill we find a spade:\n")
const cards = ["Diamond", "Spade","Heart", "Club"] // card possibilities 
let currentCard; // while Loops uses variable from a global scope unlike for loops 
while(currentCard != "Spade"){ // invison of deck of cards - this condition states "if you don't have a spade - keep plucking"
    currentCard = cards[Math.floor(Math.random() * 4)] // we're using math.floor / math.random to creat our index 
    console.log(currentCard) // we want to display each card that was spit out 
}

console.log("___________________________________\n")

console.log("Creating a do..while loop to simulate part of the cake-baking process:\n")

let cupsOfSugarNeeded = 4
let cupsAdded = 0

do{
    cupsAdded++
    // adding an if-statement to identify singular & pluar number of cups
    if (cupsAdded <= 1){
        console.log(`${cupsAdded} cup was added.`)
    }
    else (console.log(`${cupsAdded} cups was added.`))
}while(cupsAdded < cupsOfSugarNeeded) // continues to run the loop until the cups needed are complete
 
console.log("___________________________________\n")

console.log("We want to break out of a loop soon as we have the information we want: matching artist to lyrics")

const rapperArray = ["Lil' Kim", "Jay-Z", "Biggie", "Tupac"] //artist to loop through
for(let i = 0; i<rapperArray.length; i++){
    if(rapperArray[i] === "Biggie"){
        console.log(rapperArray[i])
        break; // breaks the loop - tupac won't print to the console because we already have the artist we need.
    }
    console.log(rapperArray[i])
}
console.log("And if you don't know, now you know.") // lyrics to be matched with artist.


console.log("___________________________________\n")

// below is practice for for..of loop

const fruits = ["Apple", "Orange", "Pear","Banana"]
for(const fruit of fruits){ // best practice is use singular term of array name
    console.log(fruit)
}

console.log("___________________________________\n")

const username = "Diego"
for(const char of username){ // looping through a string 
    console.log(char)
}

console.log("___________________________________\n")

const tvBrands = ["Sony","LG","Samsung","Tosiba","Vizo","Hikou"]
for(const tvBrand of tvBrands){
    if(tvBrand === "Tosiba"){
        continue; // continue will skip over the condition want it to. 
    }
    console.log(tvBrand)
}