let colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"]
let colorbox = document.getElementById("colorbox");
let body = document.body;

bgcolor = (color)=>{
    body.style.backgroundColor = color
}

colorarray.forEach((color)=>{
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click",()=>{
        bgcolor(color);
    })
    colorbox.appendChild(span)
})

