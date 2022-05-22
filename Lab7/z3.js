let checkedId = [];
function Check(id){
    if(!checkedId.includes(id)){
        document.getElementById(id).style.backgroundColor = 'rgb(229,229,229)';
        document.getElementById('input').value += document.getElementById(id).innerText;
        checkedId.push(id);
    }
    else{
        document.getElementById(id).style.backgroundColor = '';
        document.getElementById('input').value += "";
        checkedId = checkedId.filter(id => id != id);
    }
}