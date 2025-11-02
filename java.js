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
const resultt = document.getElementById('result');
let price = null;
let selecdiv = null;
let prix = null;
let cnt = 1;


for (let btn of btnres) {

    btn.addEventListener('click', function () {
        for (let ev of events) {
            ev.classList.remove('selected');
        }
        const parenres = btn.parentElement.parentElement;
        parenres.classList.add('selected');
        selecdiv = parenres.cloneNode(true);
        price = parenres.children[2].children[0].textContent;
    })
}



nex.addEventListener('click', function () {
    if (selecdiv) {
        page1.style.display = 'none';
        page2.style.display = 'block';
        pre.style.display = 'block';
        for(let i = 0; i<5; i++){
        images[i].style.display = "block";

        }
        childNv.appendChild(selecdiv);
        prix = Number(price);
        resultt.textContent = prix * cnt;
        console.log(prix);


    } else {
        alert('veuillez Choisissez un eve !');
    }

    
})


pre.addEventListener('click', function () {

    page2.style.display = 'none';
    page1.style.display = 'block';
    pre.style.display = 'none';
})

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















