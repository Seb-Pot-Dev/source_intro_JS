const title = document.querySelector("h1");
console.log (title)

const divBoxes = document.querySelector("#boxes");
console.log (divBoxes)

const boxes = document.querySelectorAll(".box");
console.log (boxes);


// lorsque je click sur mon titre (<h1>)
title.addEventListener("click", () => {
    title.style.color = "yellow"
    
})

/* click = simple click
dbclick = double click
mouseover = survol curseur */

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Boite n°" + (index + 1) + " a été cliquée")
        box.classList.toggle("active")
    })
})