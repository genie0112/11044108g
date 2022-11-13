const header = document.getElementById('header')
const menu = document.getElementById('menu')
const main = document.getElementById('main')
let open = true;
menu.addEventListener('click', e=>{
    open = !open;
    if(open){
        header.classList.remove('close');
        main.classList.remove('close');
        return;
    }
    main.classList.add('close');
    header.classList.add('close');
    
})