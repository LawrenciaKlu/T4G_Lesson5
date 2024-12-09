// let last = document.getElementById("last");
// last.innerHTML = "I am going to miss you all 😎";

// let image = document.querySelector("img");
// // image.innerHTML = "<img c1 src = 'images/bb.png'>";
// function changebuttonStyle(){
//     button.style.color = "white";
//     button.style.backgroundColor = "purple";
// }

// let button = document.querySelector("button");// selecting the element..the event that should listen frohappen
// button.addEventListener("mouseover", changebuttonStyle);
// button.addEventListener("mouseout", changebuttonStyle);


function showItem(){
    let image = document.querySelector(".imageone");
    image.style.display = "block";
    let close = document.querySelector(".close");
    close.style.display = "block";
}
let open = document.querySelector(".open");
open.addEventListener("click", showItem);

function hideItem(){
    let image = document.querySelector(".imageone");
    image.style.display = "none";
    let close = document.querySelector(".close");
    close.style.display = "none";
}

let close = document.querySelector(".close");
close.addEventListener("click", hideItem);
    

