const chai = require("chai");
const expect = chai.expect;
const calcJuros = require("../CalcJuros");

describe("Calc()", () => {
	it("Deveria ser 5% para ate 30 dias de atraso", () => {
		expect(calcJuros.Calc(15, 100)).to.equal(5);
	});
	it("Deveria ser 10% para  mais de 30 e menos de 60 dias de atraso", () => {
		expect(calcJuros.Calc(50, 100)).to.equal(10);
	});
	it("Deveria ser 15% para  mais de 60 dias de atraso", () => {
		expect(calcJuros.Calc(97, 100)).to.equal(15);
	});
});