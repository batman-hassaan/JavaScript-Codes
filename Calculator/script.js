let screen = document.getElementById("screen");
let click = false;

const appendValue = (value)=>{
    if(click){
        clearScreen()
    }
    click = false;
    if (value == "^"){
        screen.textContent  += "**";
    }
    else if (value == "√"){
        screen.textContent  += "Math.sqrt(";
    }
    else{
        screen.textContent  += value;
    }
}

function clearScreen(){
    screen.textContent ="";
}

calculateResult = ()=>{
    click = true;
    screen.textContent = eval(screen.textContent);
}