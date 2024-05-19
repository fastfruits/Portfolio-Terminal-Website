"use strict"

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", DisplayContent);
document.getElementById("demo").addEventListener("click", DisplayDemo);

DisplayContent();

function DisplayDemo(){
    console.log("Displaying Demo");
    this.box.classList.add("demo");
}

function DisplayContent(){
    const TriggerBottom = (window.innerHeight /5) * 4.5;

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
