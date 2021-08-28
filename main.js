/*Konstante für Nachkommastellen instanzieren*/
const NACHKOMMA_STELLEN = 5;

const add = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal + bVal),NACHKOMMA_STELLEN);
	}
};

const sub = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal - bVal),NACHKOMMA_STELLEN);
	}
};

const mul = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal * bVal),NACHKOMMA_STELLEN);
	}
};

const div = function (aVal, bVal) {
	if (isNaN(aVal) || isNaN(bVal)) {
		return "Not a Number";
	} else {
		return roundTo((aVal / bVal),NACHKOMMA_STELLEN);
	}
};

function transferCToP (aVal){
	if (aVal == null){
		return "transferCToP requires an input!";
	}
	var res = aVal.replace(",", ".");
	return res;
}

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

function addi () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = add(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

function subi () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = sub(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

function muli () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = mul(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

function divi () {
	let first = document.getElementById("num1").value;
	let second = document.getElementById("num2").value;
	var answer = div(parseFloat(transferCToP(first)), parseFloat(transferCToP(second)));
	var result = document.getElementById("res");
	result.value = answer;
}

module.exports = { add, sub , mul, div, transferCToP, roundTo};