"use strict"

const div = document.querySelector(".text");
const text = "/*I'am a 17 year old Junior at TERRA Environmental Research Institute. I currently am able to program in Java, Python, HTML, CSS, JavaScript, and C# with my main language that I prefer being Java at the moment but I am always looking to learn something new(More In Depth Further Down the Page). */";

window.onload = (textTyper(div, text));

function textTyper(element, text, i = 0){
    console.log("working");
    element.textContent += text[i];
    
    if(i === text.length - 1){
        return;
    }
    setTimeout(() => textTyper(element, text, i + 1), 40);  
}

