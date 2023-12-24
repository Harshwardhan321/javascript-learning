const clock = document.getElementById('clock')
// document.querySelector(#clock) - this will do the same job



setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)