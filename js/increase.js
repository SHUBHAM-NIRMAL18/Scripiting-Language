const COUNTER= 1;
const MAX= 100;
const MIN = 1;

var a = 25; 
document.getElementById('num').innerText= a;

function add(){
    let size = a + COUNTER;
    if(size > MAX){
        alert('limit exceed');
    }
    else{
        a++;
        document.getElementById('num').innerText=a
    }
}

function sum(){
    let size = a - COUNTER;
    if(size < MIN){
        alert('limit exceed');
    }
    else{
        a--;
        document.getElementById('num').innerText=a
    }
}