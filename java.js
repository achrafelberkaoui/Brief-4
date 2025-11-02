const events = document.querySelectorAll('.evenem-choix');
const btnres = document.querySelectorAll('.res');
const nex = document.getElementById('next');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const childNv = document.getElementById('schild-nv');
const pre = document.getElementById('precedent');
const steps = document.querySelectorAll('#step-v');
const images = document.querySelectorAll('.step-va');
const plus = document.getElementById('pluss');
const min = document.getElementById('minnus');
const count = document.getElementById('counter');
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
        for(let i = 0; i<5; i++){
        images[i].style.display = "block";

        }
        childNv.appendChild(selecdiv);
    } else {
        alert('veuillez Choisissez un eve !');
    }
    if (!page1) {
        pre.style.display = 'none';
    }
    else {
        pre.style.display = 'block';
    }
})


pre.addEventListener('click', function () {

    page2.style.display = 'none';
    page1.style.display = 'block';
})
let cnt = 1;
plus.addEventListener('click', function(){
      if(cnt < 10 ){
    cnt++;
    count.textContent = cnt;
    }


})
min.addEventListener('click', function(){
    if(cnt >= 1){
    cnt--;
    count.textContent = cnt;
        }

})











