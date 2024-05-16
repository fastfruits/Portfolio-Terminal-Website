"use strict"

console.log("working");
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", DisplayContent);

DisplayContent();


function DisplayContent(){
    console.log(window.innerHeight);
    const TriggerBottom = (window.innerHeight /5) * 4;

    boxes.forEach((box)=>{
        const topBox = box.getBoundingClientRect().top;

        if(topBox<TriggerBottom){
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    })
}
