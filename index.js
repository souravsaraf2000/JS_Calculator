var input = document.getElementById('inputbox');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');
var ppos = document.getElementById('p+');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var pneg = document.getElementById('p-');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var pmul = document.getElementById('p*');
var pC = document.getElementById('pC');
var p0 = document.getElementById('p0');
var peq = document.getElementById('p=');
var pdiv = document.getElementById('p/');




//Entering and evaluating values on screen
p7.addEventListener('click',function(){
    input.value = input.value + p7.innerHTML;
});
p8.addEventListener('click',function(){
    input.value = input.value + p8.innerHTML;
});
p9.addEventListener('click',function(){
    input.value = input.value + p9.innerHTML;
});
ppos.addEventListener('click',function(){
    input.value = input.value + ppos.innerHTML;
});
p4.addEventListener('click',function(){
    input.value = input.value + p4.innerHTML;
});
p5.addEventListener('click',function(){
    input.value = input.value + p5.innerHTML;
});
p6.addEventListener('click',function(){
    input.value = input.value + p6.innerHTML;
});
pneg.addEventListener('click',function(){
    input.value = input.value + pneg.innerHTML;
});
p1.addEventListener('click',function(){
    input.value = input.value + p1.innerHTML;
});
p2.addEventListener('click',function(){
    input.value = input.value + p2.innerHTML;
});
p3.addEventListener('click',function(){
    input.value = input.value + p3.innerHTML;
});
pmul.addEventListener('click',function(){
    input.value = input.value + pmul.innerHTML;
});
pC.addEventListener('click',function(){
    input.value = '';
});
p0.addEventListener('click',function(){
    input.value = input.value + p0.innerHTML;
});
peq.addEventListener('click',function(){
    input.value = eval(input.value);
});
pdiv.addEventListener('click',function(){
    input.value = input.value + pdiv.innerHTML;
});



//keyboard inputs and evaluation
document.body.addEventListener('keyup',function(event){
    var keycode = event.keyCode;
    if(keycode === 13){
        input.value = eval(input.value);
    }
    if(keycode>=65&&keycode<=90){
        alert("WRONG INPUT");
    }
});