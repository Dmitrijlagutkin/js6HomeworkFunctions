// // -----------first---------------

let number = +prompt('enter number')
let power = +prompt('enter power')


const checkingData = (number, power) => {
	let result
	if (isNaN(number) || isNaN(power)) {
		console.log("You entered not a number")
	} else if (!number || !power) {
		console.log("you didn’t enter anything")
	} else {
		return number, power
	}
}

function exponentiation(number, power) {
	let result = 1
	if (power === 0) {
		result = 1
	} else {
		for (let i = power; i >= 1; i--) {
			result *= number
		}
	}
	return result
}

if (checkingData(number, power)) {
	console.log(exponentiation(number, power))
}



// ---------------second------------------

// function logArgsFunc() {
// 	if (arguments.length === 0) {
// 		console.log("No arguments in function");
// 	} else {
// 		for (let i = 0; i < arguments.length; i++) {
// 			if (typeof arguments[i] === "function") {
// 				console.log("function was called")
// 				arguments[i]()
// 			} else {
// 				console.log(`Значение аргумента  ${arguments[i]}, тип данных аргумента  ${typeof arguments[i]}`);
// 			}
// 		}
// 	}
// }

// const uselessFunction = function () {
// 	console.log("I am function")
// 	return uselessFunction
// }

// logArgsFunc()
// logArgsFunc(100)
// logArgsFunc(100, "test", uselessFunction)

// ---------------third------------------

// let enteredString = prompt('enter any string')

// const checkString = function () {
// 	let reverseEnteredString = ""
// 	for (let i = enteredString.length; i > 0; i--) {
// 		reverseEnteredString += enteredString.charAt(i - 1)
// 	}
// 	return enteredString === reverseEnteredString ? !!enteredString : !!!enteredString
// }

// if (enteredString) {
// 	console.log(checkString(enteredString))
// }