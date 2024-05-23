"use strict"

const boxes = document.querySelectorAll(".box");
const demo1 = document.getElementById("demoBtn1");
const demo2 = document.getElementById("demoBtn2");
const demo3 = document.getElementById("demoBtn3");
const demo4 = document.getElementById("demoBtn4");
var bottom = document.getElementById('bottom');

demo1.addEventListener("click", demoSwitch1);
demo2.addEventListener("click", demoSwitch2);
demo3.addEventListener("click", demoSwitch3);
demo4.addEventListener("click", demoSwitch4);

const demoVid1 = document.createElement('video');
const demoVid2 = document.createElement('video');
const demoVid3 = document.createElement('video');
const demoVid4 = document.createElement('video');

demoVid1.src = 'Vids/sample.mp4';
demoVid1.controls = true;
demoVid2.src = 'Vids/sample.mp4';
demoVid2.controls = true;
demoVid3.src = 'Vids/sample.mp4';
demoVid3.controls = true;
demoVid4.src = 'Vids/sample.mp4';
demoVid4.controls = true;

window.addEventListener("scroll", DisplayContent);
document.getElementById("projectsHov").addEventListener("mouseover", projectsDropdown);

DisplayContent();

function DisplayContent(){
    const TriggerBottom = window.innerHeight;

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
    if(document.getElementById("demo1").textContent != ""){
        document.getElementById("bottom1").appendChild(demoVid1);
        document.getElementById("demo1").textContent = "";
    }
    else if(document.getElementById("demo1").textContent == ""){
        document.getElementById("demo1").textContent = original;
        document.getElementById("bottom1").removeChild(demoVid1);
    } 
}

function demoSwitch2(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";  
    if(document.getElementById("demo2").textContent != ""){
        document.getElementById("bottom2").appendChild(demoVid2);
        document.getElementById("demo2").textContent = "";
    }
    else if(document.getElementById("demo2").textContent == ""){
        document.getElementById("demo2").textContent = original;
        document.getElementById("bottom2").removeChild(demoVid2);
    } 
}

function demoSwitch3(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";  
    if(document.getElementById("demo3").textContent != ""){
        document.getElementById("bottom3").appendChild(demoVid3);
        document.getElementById("demo3").textContent = "";
    }
    else if(document.getElementById("demo3").textContent == ""){
        document.getElementById("demo3").textContent = original;
        document.getElementById("bottom3").removeChild(demoVid3);
    } 
}

function demoSwitch4(){
    let original = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus dolores nemo eum, fugit saepe ipsam sed rerum temporibus incidunt eligendi expedita illo. Officia laboriosam, aspernatur vitae consequatur delectus expedita!";  
    if(document.getElementById("demo4").textContent != ""){
        document.getElementById("bottom4").appendChild(demoVid4);
        document.getElementById("demo4").textContent = "";
    }
    else if(document.getElementById("demo4").textContent == ""){
        document.getElementById("demo4").textContent = original;
        document.getElementById("bottom4").removeChild(demoVid4);
    } 
}

function projectsDropdown(){
    console.log("hovering");
    
}