//my js code
document.addEventListener("DOMContentLoaded", () => {
  getCharacters()
} )
const url = "http://localhost:3000/characters"
// const characters = [
//   {
//    "id": 1,
//    "name": "Mr. Cute",
//    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
//    "votes": 0
//   },
//   {
//       "id": 2,
//    "name": "Mx. Monkey",
//    "image": "https://t12humbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
//    "votes": 0
//   },
//   {
//       "id": 3,
//    "name": "Ms. Zebra",
//    "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
//    "votes": 0
//   },
//   {
//       "id": 4,
//    "name": "Dr. Lion",
//    "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
//    "votes": 0
//   },
//   {
//       "id": 5,
//    "name": "Mme. Panda",
//    "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
//    "votes": 0
//   },
// ]
function getCharacters(){
  fetch (url)
  .then (res => res.json())
  .then(data => {
      console.log(data)
      data.forEach(characters => {
          displayCharacters(characters)
      });
  })
}
function displayCharacters(characters){
  console.log(characters.name);
  const name = document.createElement('p');
  name.innerHTML = characters.name
  const main = document.getElementById("main")
  main.append(name)
  name.addEventListener("click",() => {
      getSingleCharacters(characters)
  })
}
function getSingleCharacters(characters){
 document.getElementById("charname").innerHTML = characters.name
 document.getElementById("charimage").src = characters.image
 document.getElementById("charlikes").textContent= `Votes ${characters.votes}`

 const btn=document.getElementById("charlikes")
 btn.textContent = `Likes ${characters.votes}`
 btn.addEventListener("click", () =>{
  characters.votes++;
  btn.textContent= `Likes ${characters.votes}`
})
}
