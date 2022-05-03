let a = [];
let n = parseInt(prompt("Введіть кількість оцінок"));
let sum = 0;
let aver = 0;
for(let i = 0; i < n; i++)
{
    a[i] = parseFloat(prompt(`Введіть ${i+1} оцінку`));
    if(a[i] < 0)
        alert("Incorect vale")
}
let min = a[0];
for(let i = 0; i < n; i++)
{
    sum += a[i];
}
aver = sum/a.length;
alert(`Середній бал: ${aver}`);
for(let i = 0; i < n; i++)
{
    if(min > a[i])
    min = a[i]
}
if(min == 2)
    alert("Ви двійочник");
else if(min == 3)
    alert("Ви трійочник");
else
    alert("Ви хорошист");