function add() {
	// parseFloat принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)
	let firstNumber = parseFloat(document.getElementById('firstNumber').value);
	let secondNumber = parseFloat(document.getElementById('secondNumber').value);

	// Проверяем если аргументы firstNumber и secondNumber являются числами или могут быть в них преобразованы, функция возвращает значение false, в противном случае функция вернёт значение true
	if (isNaN(firstNumber)==true) firstNumber=0; 
	if (isNaN(secondNumber)==true) secondNumber=0;

	// С помощью метода .toFixed() избавляемся от лишних знаков после запятой, чтобы получить точное число (напрмер 0.3)
	let sumNumbers = firstNumber + secondNumber;
	let fix = sumNumbers.toFixed(1);

	// Выводим сообщение о результате 
	alert(fix);
}

