const generate = document.querySelector('#generate');
const h1 = document.querySelector('h1');
const rgb = document.querySelector('#rgb');
const hex = document.querySelector('#hex');
const reset = document.querySelector('#rst');
let newColor = 'rgb(0, 0, 0)';
let hexColor = '#000000';
let red = 0;
let green = 0;
let blue = 0;

generate.addEventListener('click', () => {
    newColor = makeRandColor();
    document.querySelector('body').style.backgroundColor = newColor;
    h1.innerText = newColor;
    TextColor(red, green, blue);
})

rgb.addEventListener('click', () => {
    navigator.clipboard.writeText(newColor);
})

hex.addEventListener('click', () => {
    hexColor = rgbtoHex(red, green, blue);
    navigator.clipboard.writeText(hexColor);
})

reset.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = 'rgb(255, 255, 255)';
    document.querySelector('h1').innerText = 'Pick a Random Color!';
    h1.classList.remove("text-light");
})

const rgbtoHex = (red, green, blue) => {
    return `#${((red << 16) | (green << 8) | blue).toString(16)}`
} 

function TextColor(red, green , blue)
{
    if( (red + green + blue) <= 200)
    {
        h1.classList.add("text-light");
    }
    else
    {
        h1.classList.remove("text-light");
    }
}

const makeRandColor = () => {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}