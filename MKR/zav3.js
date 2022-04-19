let logins = ["Atum", "suzuya", "flowless", "LeonidNechay"];
document.getElementById("button").onclick = isLoginFree(logins);
function isLoginFree(logins)
{
    let login = toString(document.getElementById("login").value);
    for(i = 0; i < 4; i++)
    {
        if(login == logins[i])
            alert("Цей логін вже зайнятий");
    }
}
if(toString(document.getElementById("login").value) == toString(document.getElementById("password").value))
    alert("Пароль не може повторяти логін");