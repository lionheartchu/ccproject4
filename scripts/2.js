let choices=[]
let btn=document.querySelector("button.btn")
let output=document.querySelector(".box")

//button-decide
btn.addEventListener("click",function(){
let rando=Math.floor(Math.random()*choices.length)
let content=document.createTextNode(choices[rando])
let para=document.createElement("span")
para.appendChild(content)
para.setAttribute("class","result")
output.appendChild(para)
})
//button-remove
// let btnR = document.querySelector("#btnRemov");
// btnR.addEventListener("click", function () {
//   output.removeChild(output.firstChild);
// });
output.addEventListener("click",function(x){
    if(x.target.classList.contains("result")){
        output.removeChild(x.target)
    }
})

let btnA=document.querySelector(".btnAdd")
btnA.addEventListener("click",function(){
    let choiceAdd=document.querySelector("#options")
    choices.push(choiceAdd.value)
    choiceAdd.value=""
})