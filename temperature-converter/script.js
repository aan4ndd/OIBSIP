let result = document.getElementById("result");
let button = document.getElementById("submit");
let celsius = document.getElementById("celsius");
let fh = document.getElementById("fh");

function convert(){
let input = Number(document.getElementById("mainInput").value);

    if(celsius.checked){
        result.textContent = ((input- 32) * 5/9).toFixed(2) + ' °C';
    }
    else if(fh.checked){
        result.textContent = ((input * 9/5) + 32).toFixed(2) + ' °F';
    }
    

    else{
        result.textContent = "choose an output";
    }
}