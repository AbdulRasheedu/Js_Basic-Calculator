function appendCharecter (charecter){
    document.getElementById("display").value += charecter;
}
function clearDisplay(){
    document.getElementById("display").value ='';
}
function clearEntry(){
    const display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}
function calculatorResult(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}