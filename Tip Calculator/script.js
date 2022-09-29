const button = document.querySelector('button');
const output = document.querySelector('.output');
const cost = document.querySelector("input")

button.addEventListener("click" ,function(){
    console.log("click")
    
    let tip = ((cost.value/100)*0.15 .toFixed(2))
    let temp = `<h1>You Should tip Rs${tip} on cost Rs${cost.value}</h1>`
    output.innerHTML = temp;
    
})
