let age = parseFloat(prompt("Введіть вік",""));
if(age<=3){
    age = 3 - age;
    if(age == 0){
        alert(`Вам час до садочка`);
    }
    else{
        alert(`Ви будете відвідувати садочок через ${age}`);
    }
}
else if(3<age && age<=6){
    age = 6 - age;
    if(age == 0){
        alert(`Вам час до школи`);
    }
    else{
        alert(`Ви будете відвідувати школу через ${age}`);
    }
}
else if(6<age && age<=17){
    age = 17 - age;
    if(age == 0){
        alert(`Час закінчувати навчання`);
    }
    else{
        alert(`Ви закінчите школу через ${age}`);
    }
}
else if(17<age && age<=21){
    age = 21 - age;
    if(age == 0){
        alert(`Час закінчувати навчання`);
    }
    else{
        alert(`Ви закінчите бакалавр через ${age}`);
    }
}
else if(age<0){
    alert(`Неправильний вік`);
}
else{
    alert(`Схоже вам час на роботу`);
}