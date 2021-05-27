let centerMenu = document.querySelector('.centerMenu');
document.querySelector('.toggleMenu').addEventListener('click', () => {
    dropdown(centerMenu);
});

function dropdown(el) {
    el.classList.toggle('cusShow');
}

function resize() {
    var b = document.querySelector('.infoContainer');
    var p = document.querySelector('.infoPar');
    var d = +getComputedStyle(p).width.replace('px', "");
    let x = d * 1 / 635;
    let transX = ((1 - (x > 1 ? 1 : x)) / 1 * 100) - 10;
    console.log(transX, 'transx');
    transX = transX < 0 ? 0 : transX;
    b.style.transform = `scale(${x > 1 ? 1 : x}) translateX(-${transX}%)`;
    console.log(x)

}
resize();
window.addEventListener('resize', resize);

function openModal(id) {
    const modals = document.querySelectorAll('.cusModal');
    for (let i = 0; i < modals.length; i++) {
        if (modals[i].id == id) {
            modals[i].classList.add('cusShow');
        } else {
            modals[i].classList.remove('cusShow');
        }
    }
}

function togglePass(el) {
    const input = el.previousElementSibling;
    if (input.type == 'password') {
        input.type = "text";
        el.innerHTML = "Hide";
    } else {
        input.type = "password";
        el.innerHTML = "Show";
    }
}