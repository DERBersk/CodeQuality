const add = function (a,b) {
    return a+b;
};

function addi() {
    let first = document.getElementById("adder1").value;
    let second = document.getElementById("adder2").value;
    if(isNaN(first) && isNaN(second))
    {
        alert( "Not a number" );
        return false;
    }
    else
    {
        var answer =add(parseFloat(first),parseFloat(second));
        var result = document.getElementById('res');
        result.value=answer;
    }
}

module.exports = add;