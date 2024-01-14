// Generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
};

// Initialize intervalId variable
let intervalId;

const startChangingColor = function () {
    // Start changing color every 1000 milliseconds (1 second)
    intervalId = setInterval(changeColor, 1000);

    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    // Clear the interval to stop changing color
    clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
