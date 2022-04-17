let n = prompt("Введіть кількість чисел: ", "");
let a = [];
let num = 0;
for(i = 0; i < n; i++){
    a[i] = prompt("Введіть число: ", "");
}
let f = (a) => {
    for(let index in a)
    {
        if(index % 2 == 0)
        {
            num++;
        }
    }
    return num;
}
alert(f(a));