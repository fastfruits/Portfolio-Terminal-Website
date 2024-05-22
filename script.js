"use strict"

const boxes = document.querySelectorAll(".box");
const demo1 = document.getElementById("demoBtn1");
const demo2 = document.getElementById("demoBtn2");
const demo3 = document.getElementById("demoBtn3");
const demo4 = document.getElementById("demoBtn4");



window.addEventListener("scroll", DisplayContent);
demo1.addEventListener("click", demoSwitch1);
demo2.addEventListener("click", demoSwitch2);
demo3.addEventListener("click", demoSwitch3);
demo4.addEventListener("click", demoSwitch4);

var demoVid = document.createElement('demoVid');
demoVid.src = 'https://www.youtube.com/embed/9kd-PoHWah8';
demoVid.width = '560';
demoVid.height = '315';

var bottom = document.getElementById('bottom');

DisplayContent();

function DisplayContent(){
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

function demoSwitch1(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";
    if(document.getElementById("demo").textContent == ""){
        document.getElementById("demo").textContent = original;
    }
    else{
        document.getElementById("demo").textContent = "";
        bottom.appendChild(demoVid);
    }
}

function demoSwitch2(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";
    if(document.getElementById("demo2").textContent == ""){
        document.getElementById("demo2").textContent = original;
    }
    else{
        document.getElementById("demo2").textContent = "";
    }
}

function demoSwitch3(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";
    if(document.getElementById("demo3").textContent == ""){
        document.getElementById("demo3").textContent = original;
    }
    else{
        document.getElementById("demo3").textContent = "";
    }
}

function demoSwitch4(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";
    if(document.getElementById("demo4").textContent == ""){
        document.getElementById("demo4").textContent = original;
    }
    else{
        document.getElementById("demo4").textContent = "";
    }
}