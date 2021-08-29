/*Konstante für Nachkommastellen instanzieren*/
const NACHKOMMA_STELLEN = 5;

/*
Addiert die Zahl aVal und bVal
*/
const add = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal + bVal),NACHKOMMA_STELLEN);
	}
};

/*
Subtrahiert die Zahl aVal von bVal
*/
const sub = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal - bVal),NACHKOMMA_STELLEN);
	}
};

/*
Multipliziert die Zahl aVal und bVal
*/
const mul = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal * bVal),NACHKOMMA_STELLEN);
	}
};

/*
Dividiert die Zahl aVal durch bVal
*/
const div = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal / bVal),NACHKOMMA_STELLEN);
	}
};

/*
Ersetzt alle Kommata mit Punkten im String
*/
function transferCToP (aVal){
	if (aVal == null){
		return "transferCToP requires an input!";
	}
	var res = aVal.replace(",", ".");
	return res;
}

/*
Rundet den Wert aVal auf fractionDigits
*/
function roundTo (aVal, fractionDigits){
	if (aVal == null){
		return "roundTo muss aVal übergeben werden!";
	}
	if (fractionDigits == null){
		return "roundTo muss fractionDigits übergeben werden!";
	}
	var res = (Math.round(aVal*(Math.pow(10,fractionDigits)))/(Math.pow(10,fractionDigits)));
	return res;
}

/*
Nimmt die Werte aus Textfeld 1 und 2 und schreibt das Ergebnis der Addition der Zahlen in das Textfeld res
*/
function addi () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = add(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

/*
Nimmt die Werte aus Textfeld 1 und 2 und schreibt das Ergebnis der Subtraktion der Zahlen in das Textfeld res
*/
function subi () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = sub(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

/*
Nimmt die Werte aus Textfeld 1 und 2 und schreibt das Ergebnis der Multiplikation der Zahlen in das Textfeld res
*/
function muli () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = mul(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

/*
Nimmt die Werte aus Textfeld 1 und 2 und schreibt das Ergebnis der Division der Zahlen in das Textfeld res
*/
function divi () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = div(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

module.exports = { add, sub , mul, div, transferCToP, roundTo};