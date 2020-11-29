function aritmetica(a = 0, b = 0) {

	let soma = a + b;
	let multiplicação = a * b;
	let subtração = a - b;
	let divisão = a / b;

	return {
		soma,
		multiplicação,
		subtração,
		divisão,
	}
}

let result = aritmetica(10,2);
console.log(result);