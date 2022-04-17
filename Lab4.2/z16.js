let n = prompt("Введіть кількість чисел: ", "");
let b = [];
let num = 0;
for(i = 0; i < n; i++){
    b[i] = prompt("Введіть число: ", "");
}
let f = (a) => {
    for(j = 0; j < n; j++)
    {
        if(b[j] % 2 == 0)
        {
            num += 1;
        }
    }
    return num;
}
alert(f(b));