const button = document.getElementById('button');
let counter = 0;

// create div when button is clicked
button.addEventListener('click', () => {
    // create a new div
    const div = document.createElement('div');
    div.setAttribute('class', `main__div${counter}`);
    div.style.border = `20px solid ${randomRGB()}`;
    div.style.width = '100%';  
    div.style.height = '100%'; 

    // If it's not the first div, then append the new div as a child of the previous one
    if (counter > 0) {
        const prevDiv = document.querySelector(`.main__div${counter - 1}`);
        prevDiv.appendChild(div);
    } else {
        // If it's the first div, append it to the main__box
        const mainBox = document.querySelector('.main__box');
        mainBox.appendChild(div);
    }
    counter++;
    
}); 

//random color picker for border
function randomRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
