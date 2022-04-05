let k = parseFloat(prompt("Введіть будь яке число",""));
let mul = 0
for(let i = 1; i < 11; i++)
{
    mul = k*i
    document.write(`<h3>${k}*${i}=${mul}</h3>`);
}