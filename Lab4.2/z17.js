let cm = prompt("Input cm", "")
alert(Inches(cm));
function Inches(cm){
    if(cm > 0)
    {
        return cm*0.393700787;
    }
    else
    {
        return "Incorect value";
    }
}