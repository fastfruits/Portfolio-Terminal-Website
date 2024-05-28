"use strict"

const div = document.querySelector(".text");
const text = "lorem ipsum this is a sample text";

window.onload = (textTyper(div, text));

function textTyper(element, text, i = 0){
    console.log("working");
    element.textContent += text[i];
    
    if(i === text.length - 1){
        return;
    }
    setTimeout(() => textTyper(element, text, i + 1), 50);  
}
