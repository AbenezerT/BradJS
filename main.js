//Function 
/*
function greet(Name) {
    alert(" hello my Name is " +  Name)
}
greet('Abenezer');

*/

//objects 



/*
let cat = {
    name : "CatName",
    age : 4,
    foods: {
      favorite: "Tuna",
      leastFavorite: "orange",  
    },
    eyeColor: "Blue", 
  
    meow(){
       console.log("Good");
       
    }
}
console.log(cat.eyeColor);
console.log(cat.foods.favorite);
*/

//browser obeject


/*
document.addEventListener('click', click);
function click(){
    alert("Works")
}

*/


//Arrays

/*
let myWord = ["red", "Yellow", "Black"];
let myFavoriteNumbers = [9,2,8,5,7,4];

let myText = [{
    name: "Jon",
    species: "Human"
}, {
    name: "barksalot",
    species: "Dog"
}];

myWord.push("Green")
console.log(myWord);

myWord.splice(1, 1)
console.log(myWord);

console.log(myText[1].species);

*/

//Decisions



// let straberrycount = 20;

// if (straberrycount > 9) {
//     console.log("Congrats!")
// }
// else{
//     console.log("Sorry we don't ship orders that are small")
// }

// let straberrycount = 2

// while (straberrycount <= 200) {
//     console.log("There are " + straberrycount + " Strawberries");
//    straberrycount++
// }


//Higher-order function


// document.addEventListener('click', ourAmazingFunction => {
//     alert("Good")
// })


function createmultiplier(multiplier){
    return function(x){
        return x * multiplier
    }
}  
let doubleME = createmultiplier(2)
let tripleMe = createmultiplier(3)
console.log(tripleMe(20));
