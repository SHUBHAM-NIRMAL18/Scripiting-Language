const COUNTER = 2;
const MAX = 72;
const MIN = 12;

var pobj = document.getElementById('welcome');
pobj.style.fontSize= "20px";



function sum(){
    let size = parseInt(pobj.style.fontSize) + COUNTER;
    if(size > MAX){
        alert('LIMIT EXCEED');
    }
    else{
        pobj.style.fontSize = size +'px';
    }
    
}

function minus(){
    let size = parseInt(pobj.style.fontSize) - COUNTER;
    if(size < MIN){
        alert('LIMIT EXCEED');
    }
    else{
        pobj.style.fontSize = size +'px';
    }
    
}