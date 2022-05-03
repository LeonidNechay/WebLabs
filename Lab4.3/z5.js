let mood = ["Веселий", "Сумний", "Сумний", "Веселий", "Веселий","Сумний", "Веселий"];
let happy = mood.filter(item => item == "Веселий");
for(let i = 0; i < happy.length; i++)
{
    document.write(`<img src="https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png">`);
}
document.write(`<br>`);
let sad = mood.filter(item => item == "Сумний");
for(let i = 0; i < happy.length; i++)
{
    document.write(`<img src="https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png">`);
}
document.write(`<br>`);
let index5 = parseInt(prompt("Введіть номер пункту: "));
let todayMood = mood[index5-1];
if(todayMood == "Веселий")
    document.write(`<img src="https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png">`);
else
    document.write(`<img src="https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png">`);