// //Function 
// /*
// function greet(Name) {
//     alert(" hello my Name is " +  Name)
// }
// greet('Abenezer');

// */

// //objects 



// /*
// let cat = {
//     name : "CatName",
//     age : 4,
//     foods: {
//       favorite: "Tuna",
//       leastFavorite: "orange",  
//     },
//     eyeColor: "Blue", 
  
//     meow(){
//        console.log("Good");
       
//     }
// }
// console.log(cat.eyeColor);
// console.log(cat.foods.favorite);
// */

// //browser obeject


// /*
// document.addEventListener('click', click);
// function click(){
//     alert("Works")
// }

// */


// //Arrays

// /*
// let myWord = ["red", "Yellow", "Black"];
// let myFavoriteNumbers = [9,2,8,5,7,4];

// let myText = [{
//     name: "Jon",
//     species: "Human"
// }, {
//     name: "barksalot",
//     species: "Dog"
// }];

// myWord.push("Green")
// console.log(myWord);

// myWord.splice(1, 1)
// console.log(myWord);

// console.log(myText[1].species);

// */



// //Decisions



// // let straberrycount = 20;

// // if (straberrycount > 9) {
// //     console.log("Congrats!")
// // }
// // else{
// //     console.log("Sorry we don't ship orders that are small")
// // }

// // let straberrycount = 2

// // while (straberrycount <= 200) {
// //     console.log("There are " + straberrycount + " Strawberries");
// //    straberrycount++
// // }



// /*
// //Higher-order function




// function createmultiplier(multiplier){
//     return function(x){
//         return x * multiplier
//     }
// }  
// let doubleME = createmultiplier(2)
// let tripleMe = createmultiplier(3)
// console.log(tripleMe(20));

// let myColors = ['red', 'orange', 'yellow']

// myColors.forEach(saySomthingNice)

// function saySomthingNice(color){
//  console.log("The color " + color + " is a grate color");
 
// }


// let pets = [
//     {
//         name: "Meowsalot",
//         species: "Cat",
//         age: 2
//     },
//       {
//           name: "Barksalot",
//           species: "dog",
//           age: 3,
//       },
//           {
//           name: "purrsloud",
//           species:"Cat",
//           age: 8
//           }
      
//     ]
//     pets.push(
//         {
//          name:"puppster",
//          species: "dog",
//          age: 1   
// })
// // console.log(pets);

// let ourTest = pets.map(nameOnly)

// function nameOnly(x){
//     return x.name
// }
// console.log(ourTest);


// let dogs = pets.filter(dogsOnly)

// function dogsOnly(x){
//     return x.species == "dog"
// }
// console.log(dogs)

// function onlyBabies(x){

//  return x.age < 3
// }

// let babyDogName = pets.filter(dogsOnly).filter(onlyBabies).map(nameOnly);

// console.log(babyDogName);

// */






// //Scope & context


// let myName = "Abenezer"

// // let uses bloke scope 
// // var uses function scope


// function amazingFunction(){
//         // let myName = "Abenezer Junior"
//         if(2+2 == 4){
//             var myName = "Abenezer the 3rd"
//             //console.log("inside the if statement", myName);
//         }
//              //console.log("inside our function", myName);
            
// }

// amazingFunction()
// console.log("in the global scope", myName);



// // context 
// /*

// let john = {
//     firstName : "John",
//     lastName : "doe",
//     driver(){
//         function imAfunctionNotAMethod(){
//             console.log(this);
            
//         }

//         imAfunctionNotAMethod();
//         console.log(this.firstName + " " + this.lastName + " is driving a car");
        
//     }
// }
// john.driver()


// function breather(){
//     console.log(this.firstName + " " + this.lastName + " Just inhaled and exhaled");
// }

// breather.call(john)


// */


// //anonymous Function

// document.addEventListener('click', function(){
//     alert("Good")
// });
// //Arrow function
// document.addEventListener('click', ()=> alert("Good"))


// let myNumbers = [10, 500, 2000]

// let doubledNumber = myNumbers.map( x => x * 2);

// console.log(doubledNumber);

// let myname = "Abenezer"
// console.log(`My name is ${myname}`)




//TODO App


let ourForm = document.getElementById('ourForm')
let ourField = document.getElementById('ourField')
let ourList = document.getElementById('ourList')

ourForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    createItem(ourField.value)
})

function createItem(x){
    let ourHtml = `   <li>${x}<button onclick="deleteItem(this)">Delete </button></li>`

    ourList.insertAdjacentHTML("beforeend", ourHtml)
    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove()

}
  
