const events = document.querySelectorAll('.evenem-choix');
const btnres = document.querySelectorAll('.res');

for(let btn of btnres){
    btn.addEventListener('click', function(){
        for(let ev of events){
            ev.classList.remove('selected');
        }
        const parenres = btn.parentElement.parentElement;
        parenres.classList.add('selected');
    })
}