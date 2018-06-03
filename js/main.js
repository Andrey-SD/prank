var butt_no = document.getElementById('no');
var butt_yes = document.getElementById('yes');
var pop_up = document.getElementById('pop_up');
var main = document.getElementById('main');

document.onmousemove = function(event){
    if(document.getElementById('no')==(event?event.target:window.event.srcElement)){
        butt_no.style.top = (Math.floor(Math.random() * (70 - 0 + 1)) + 0)+'%';
        butt_no.style.left = (Math.floor(Math.random() * (60 - 35 + 1)) + 35)+'%';};
};

butt_yes.onclick = function(){
    main.style.display = 'none';
    pop_up.style.visibility='visible';
};
