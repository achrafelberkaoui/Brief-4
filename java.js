const events = document.querySelectorAll('.evenem-choix');
const btnres = document.querySelectorAll('.res');
const nex = document.getElementById('next');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const childNv = document.getElementById('schild-nv');
let selecdiv = null;
for (let btn of btnres) {

    btn.addEventListener('click', function () {
        for (let ev of events) {
            ev.classList.remove('selected');
        }
        const parenres = btn.parentElement.parentElement;
        parenres.classList.add('selected');
        selecdiv = parenres.cloneNode(true);
    })
}



nex.addEventListener('click', function () {
    if (selecdiv) {
        page1.style.display = 'none'; 
        page2.style.display = 'block'; 
        childNv.innerHTML = ''; 
        childNv.appendChild(selecdiv); 
    } else {
        alert('veuillez Choisissez un eve !');
    }
})


