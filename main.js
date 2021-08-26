const add = function (a,b) {
    if(isNaN(a) || isNaN(b))
    {
        return 'Not a Number';
    }
    else{
        return a+b;
    }
};

const sub = function (a,b) {
    if(isNaN(a) || isNaN(b))
    {
        return 'Not a Number';
    }
    else{
        return a-b;
    }
};
function addi(){
    let first = document.getElementById('num1').value;
    let second = document.getElementById('num2').value;
    var answer =add(parseFloat(first),parseFloat(second));
    var result = document.getElementById('res');
    result.value=answer;
}

function subi() {
    let first = document.getElementById('num1').value;
    let second = document.getElementById('num2').value;
    var answer =sub(parseFloat(first),parseFloat(second));
    var result = document.getElementById('res');
    result.value=answer;
}


module.exports = {add,sub};