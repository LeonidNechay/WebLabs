let a = [];
let max = 0;
let min = 0;
let workDay = 0;
let weekendDay = 0;
for(let i = 0; i < 7; i++)
{
    a[i] = parseInt(prompt(`Введіть кількість відвідувачів: `));
    if(a[i] < 0)
        alert("Incorect vale");
}
for(let i = 0; i < 7; i++)
{
    if(a[i] < 20)
        console.log(`${i+1}`);
}
for(let i = 0; i < 5; i++)
{
    workDay += a[i];
}
console.log(`${workDay}`)
for(let i = 5; i < 7; i++)
{
    weekendDay += a[i];
}
console.log(`${weekendDay}`)
min = a[0];
for(let i = 0; i < 7; i++)
{
    if(min > a[i])
        min = a[i];
}
console.log(a.indexOf(min)+1);
max = a[0];
for(let i = 0; i < 7; i++)
{
    if(max < a[i])
        max = a[i];
}
console.log(console.log(a.indexOf(max)+1));
