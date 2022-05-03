let a2 = [];
let max2 = 0;
let min2 = 0;
let workDay = 0;
let weekendDay = 0;
for(let i = 0; i < 7; i++)
{
    a2[i] = parseInt(prompt(`Введіть кількість відвідувачів: `));
    if(a2[i] < 0)
        alert("Incorect vale");
}
for(let i = 0; i < 7; i++)
{
    if(a2[i] < 20)
        console.log(`${i+1}`);
}
for(let i = 0; i < 5; i++)
{
    workDay += a2[i];
}
console.log(`${workDay}`)
for(let i = 5; i < 7; i++)
{
    weekendDay += a2[i];
}
console.log(`${weekendDay}`)
min2 = a2[0];
for(let i = 0; i < 7; i++)
{
    if(min2 > a2[i])
        min2 = a2[i];
}
console.log(a2.indexOf(min2)+1);
max2 = a2[0];
for(let i = 0; i < 7; i++)
{
    if(max2 < a2[i])
        max2 = a2[i];
}
console.log(console.log(a2.indexOf(max)+1));
