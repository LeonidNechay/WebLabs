let counter = 0;
function Show(id){
    let id2 = 0;
    if(id > 3 || id < 1)
    {
        alert("Incorect value");
        throw("Incorect value");
    }
    if(counter == 1)
    {
        for(let i = 1; i < 4; i++)
        {
            if(i == "1")
                id2 = "a";
            else if(i == "2")
                id2 = "b";
            else if(i == "3")
                id2 = "c"; 
            document.getElementById(id2).style.color = 'gray';
            document.getElementById(i).style.visibility = 'hidden';
        }
        id2 = "";
        counter--;
    }
    if(id == "1")
        id2 = "a";
    else if(id == "2")
        id2 = "b";
    else if(id == "3")
        id2 = "c";
    document.getElementById(id2).style.color = 'black';
    document.getElementById(id).style.visibility = 'visible';
    counter++;
}

window.onload = Show(1);