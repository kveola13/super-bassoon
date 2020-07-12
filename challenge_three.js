let tipCalculator = function(amount, percent){
	console.log("Calculating $" + amount + " with " + percent + " percent tip")
	return amount * (percent/100)
}

let challenge = function(bill, showTotal) {
	if(bill < 50){
		return showTotal ? tipCalculator(bill, 20) + bill : tipCalculator(bill, 20)
	}
	if(bill > 50 && bill < 200){
		return showTotal ? tipCalculator(bill, 15) + bill : tipCalculator(bill, 15)
	}
	if(bill > 200){
		return showTotal ? tipCalculator(bill, 10) + bill : tipCalculator(bill, 10)
	}
}

let bills = [214, 48, 268]

for (var i = 0; i < bills.length; i++) {
	console.log(challenge(bills[i], false).toFixed(2))
}

for (var i = 0; i < bills.length; i++) {
	console.log(challenge(bills[i], true).toFixed(2))
}

var total = 0

for (var i = 0; i < bills.length; i++) {
	total += (challenge(bills[i], true))
}
console.log("The total is: $" + total.toFixed(2))