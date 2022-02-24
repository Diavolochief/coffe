
function accion(){
    console.log("funciona mi boton");
let a=document.getElementsByClassName('nave'); 
for( var i =0;i<a.length;i++){
    a[i].classList.toggle('desaparece');
}
}
