let win = [-100, 100, -200, 300, 500, 400, -500];
let index4 = 0;
let usedIndexes = [];
let sum4 = 0;
let play = "";
do
{
    if(usedIndexes.length == win.length)
    {
        alert(`Ви використали всі спроби, ось ваш вийграш: ${sum4}`);
        break;
    }
    index4 = parseInt(prompt("Введіть число від 1 до 7: "));
    if(usedIndexes.indexOf(index4) != -1)
    {
        alert("Ви вже обирали це число");
        continue;
    }
    sum4 += win[index4-1];
    usedIndexes.push(index4);
    alert(`Ваш поточний вийграй: ${sum4}`);
    play = prompt("Ви готові грати далі? (Так/Ні)");
}
while(play.toLowerCase() == "так")