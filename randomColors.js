const generate = document.querySelector('#generate');
const colorName = document.querySelector('#colorName');
const rgb = document.querySelector('#rgb');
const hex = document.querySelector('#hex');
const reset = document.querySelector('#rst');
let newColor = 'rgb(0, 0, 0)';
let red = 0;
let green = 0;
let blue = 0;

generate.addEventListener('click', () => {
    newColor = makeRandColor();

    const getcolorName = async () => {
        await axios.get(`https://www.thecolorapi.com/id?rgb=${newColor}`)
            .then((res => {
                colorName.innerText = res.data.name.value;
                document.querySelector('body').style.backgroundColor = newColor;
                setTextColor(red, green, blue);
            }));
    }

    getcolorName();
})

rgb.addEventListener('click', () => {
    navigator.clipboard.writeText(newColor);
})

hex.addEventListener('click', () => {
    let hexColor = rgbtoHex(red, green, blue);
    navigator.clipboard.writeText(hexColor);
})

reset.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = 'rgb(255, 255, 255)';
    document.querySelector('h1').innerText = 'Pick a Random Color!';
    colorName.classList.remove("text-light");
})

const rgbtoHex = (red, green, blue) => {
    return `#${((red << 16) | (green << 8) | blue).toString(16)}`
}

function setTextColor(red, green, blue) {
    if ((red + green + blue) <= 200) {
        colorName.classList.add("text-light");
    }
    else {
        colorName.classList.remove("text-light");
    }
}

const makeRandColor = () => {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}