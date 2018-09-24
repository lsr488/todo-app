var listDisplay = document.getElementById("list-display");

function ToDoItem(item, status) {
	this.item = item;
	this.status = status
}

function ToDoList() {
	this.list = [];
	this.addToList = function(item) {
		this.list.push(item);
	}

	// delete 1 item at a time based on index
	this.deleteFromList = function(index) {
		this.list.splice(index, 1);
	}

	this.showList = function() {
		var allItems = "";
		if(this.list.length > 0) {
			this.list.forEach(function(item) {
				// console.log(item["item"]); //DELETE ME
				allItems += `<li class="list-item">${item["item"]}</li>`
				return allItems;
			});
			// console.log(allItems); //DELETE ME
			// console.log(allItems.length); //DELETE ME
			listDisplay.innerHTML = allItems; // Jasmine says cannot set property of innerHTML of null
		} else {
			var msg = "There are no items to display."
			console.log(msg);
			listDisplay.innerHTML = msg; // Jasmine says cannot set property of innerHTML of null
		}
	}
}


var newList = new ToDoList();
var item1 = new ToDoItem("fetch mail", false);
var item2 = new ToDoItem("paint car", false);
var item3 = new ToDoItem("walk dog", false);
newList.addToList(item1);
newList.addToList(item2);
newList.addToList(item3);

newList.showList();