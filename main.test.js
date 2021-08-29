const { add, sub, mul, div, transferCToP, roundTo} = require("./main");

/*
testen des add modules
*/
test("should output 2+3=5, NULL insurance", () => {
	const testtext = add(2, 3);
	expect(testtext).toBe(5);

	const nulltest = add();
	expect(nulltest).toBe("Not a Number");
});

/*
testen des sub modules
*/
test("should output 3-2=1, NULL insurance", () => {
	const testtext = sub(3, 2);
	expect(testtext).toBe(1);

	const nulltest = sub();
	expect(nulltest).toBe("Not a Number");
});

/*
Testen des mul modules
*/
test("should output 3*2=6, NULL insurance",() => {
	const testtext = mul(3, 2);
	expect(testtext).toBe(6);

	const nulltest = mul();
	expect(nulltest).toBe("Not a Number");
});

/*
Testen des div modules
*/
test("should output 3/2=1.5, NULL insurance",() => {
	const testtext = div(3, 2);
	expect(testtext).toBe(1.5);

	const nulltest = div();
	expect(nulltest).toBe("Not a Number");
});

/*
Testen des transferCToP modules
*/
test("should output transferCToP(2,2)=2.2, NULL insurance",() => {
	const testtext = transferCToP("2,2");
	expect(testtext).toBe("2.2");

	const nulltest = transferCToP();
	expect(nulltest).toBe("transferCToP requires an input!");
});

/*
Testen des roundTo modules
*/
test("should output rountTo(2.95,0)=3, roundTo(3.355555,3)=3.356, NULL insurance",() => {
	const testtext = roundTo(2.95,1);
	expect(testtext).toBe(3);

	const roundtext = roundTo(3.355555,4);
	expect(roundtext).toBe(3.3556);

	const nulltest = roundTo(aVal=12);
	expect(nulltest).toBe("roundTo muss fractionDigits übergeben werden!");
});
