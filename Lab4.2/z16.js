let n = prompt("Введіть кількість чисел: ", "");
let b = [];
let num = 0;
for(i = 0; i < n; i++){
    b[i] = prompt("Введіть число: ", "");
}
let f = (a) => {
    for(let index in b)
    {
        if(index % 2 == 0)
        {
            num++;
        }
    }
    return num;
}
alert(f(b));