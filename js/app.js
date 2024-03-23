// Project requirement
// change the background color randomly by clicking button 

// steps 


// step 1 - create onload handler

let div = null;

window.onload = () => {
    main();

}

function main(){
    const root = document.getElementById("root"); //root ke dhore nilam
    const btn = document.getElementById("change-btn"); //button ke dhore nilam
    const output = document.getElementById("output"); //output ke dhore nilam
    const copyBtn = document.getElementById("copy-btn"); //copy-btn ke dhore nilam

    btn.addEventListener("click", function(){
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(output.value);
        if(div != null){
            div.remove();
            div = null;
        }
        generateToastMessage(`${output.value} copied`);
    });


}



// step 2 - random color generator function 
function generateHEXColor(){
    // rgb(0,0,0) to rgb(255,255,255) 
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event 


function generateToastMessage(msg){

    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener("click", function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out'); 

        div.addEventListener("animationend", function(){
            div.remove();
            div = null;
        });
    })

    document.body.appendChild(div);
}