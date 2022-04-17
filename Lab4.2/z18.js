let h1 = prompt("Введіть заголовок: ", "");
let img = prompt("Введіть посилання на зображення: ", "");
let a = prompt("Введіть посилання для переходу: ", "");
var html = function(h1, img, a){
    document.write(`<h1>${h1}</h1>`);
    document.write(`<a href='${a}'><img src='${img}'></img></a>`);
}
html(h1,img,a);