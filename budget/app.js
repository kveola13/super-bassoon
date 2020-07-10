let budgetController = (function(){

	let Expense = function(id, description, value){
		this.id = id
		this.description = description
		this.value = value
	}
	
	let Income = function(id, description, value){
		this.id = id
		this.description = description
		this.value = value
	}

	let data = {
		allItems: {
			expense: [],
			income: []
		},
		totals:{
			expense: 0,
			income: 0
		}
	}
	return {
		addItem: function(type, description, value){
			let newItem, id

			if(data.allItems[type].length > 0) {
				id = data.allItems[type][data.allItems[type].length-1].id + 1
			} else {
				id = 0
			}

			if(type === "expense"){
				newItem = new Expense(id, description, value)
			} else if(type === "income"){
				newItem = new Income(id, description, value)
			}

			data.allItems[type].push(newItem)
			return newItem
		},
		testing: function(){
			console.log(data)
		}
	}

})()

let UIController = (function(){

	let DOMStrings = {
		inputType: ".add__type",
		inputDescription: ".add__description",
		inputValue: ".add__value",
		inputButton: ".add__btn"
	}

	return {
		getInput: function(){
			return {
				type : document.querySelector(DOMStrings.inputType).value,
				description : document.querySelector(DOMStrings.inputDescription).value,
				value : document.querySelector(DOMStrings.inputValue).value
			}
		},
		getDOMStrings : function(){
			return DOMStrings
		}
	}
})()

let controller = (function(budgetController, UIController){
	let input, newItem

	let controllerAddItem = function(){
		input = UIController.getInput()
		newItem = budgetController.addItem(input.type, input.description, input.value)
	}

	let setupEventListeners = function() {
		let DOM = UIController.getDOMStrings()
		document.querySelector(DOM.inputButton).addEventListener("click", controllerAddItem)

		document.addEventListener("keypress", function(event){
			if(event.keyCode === 13 || event.which === 13){
				controllerAddItem()
			}
		})
	}
	return{
		init: function(){
			console.log("Application starting...")
			setupEventListeners()
		}
	}

})(budgetController, UIController)