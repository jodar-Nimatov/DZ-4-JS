let add = document.getElementById('increment')
let remove = document.getElementById('dicrement')

let int = document.getElementById('number')
let integer = 0;

increment.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer;

})
dicrement.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;

})