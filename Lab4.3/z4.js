let win = [-100, 100, -200, 300, 500, 400, -500];
let index = 0;
let usedIndexes = [];
let sum = 0;
let play = "";
do
{
    if(usedIndexes.length == win.length)
    {
        alert(`Ви використали всі спроби, ось ваш вийграш: ${sum}`);
        break;
    }
    index = parseInt(prompt("Введіть число від 1 до 7: "));
    if(usedIndexes.indexOf(index) != -1)
    {
        alert("Ви вже обирали це число");
        continue;
    }
    sum += win[index-1];
    usedIndexes.push(index);
    alert(`Ваш поточний вийграй: ${sum}`);
    play = prompt("Ви готові грати далі? (Так/Ні)");
}
while(play.toLowerCase() == "так")