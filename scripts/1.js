// let zod=["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog","Pig"];
// btn.addEventListener("click",function(){
//     let random=Math.floor(Math.random()*zod.length);
//     let doc=document.getElementById("animal")
//     doc.innerHTML=zod[random];
// })
let lunch = ["🥯", "🌮", "🍱", "🍜", "🍣", "🍕", "🥟"];

let btn = document.querySelector("button.btn");
let output = document.querySelector(".box");

btn.addEventListener("click", function () {
  let rando = Math.floor(Math.random() * lunch.length);
  let emoji = document.createTextNode(lunch[rando]);
  let para = document.createElement("span");
  para.appendChild(emoji);
  para.setAttribute("class", "fruity");
  output.appendChild(para);
});

let btnA = document.querySelector(".btnAdd");

btnA.addEventListener("click", function () {
  let emojiAdd = document.querySelector("#fname");
  lunch.push(emojiAdd.value);
  emojiAdd.value = "";

  localStorage.setItem('lunch', JSON.stringify(lunch));
  fetch('/lunch.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lunch)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('The file has been updated!');
  })
  .catch(error => {
    console.error('There was a problem updating the file:', error);
  });
});

// const jsonString = JSON.stringify(lunch);
// const fs = require('fs');
// fs.writeFile('lunch.json', jsonString, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
// const jsonString = JSON.stringify(lunch, null, 2);

// console.log(JSON.stringify(lunch));