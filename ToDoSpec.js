describe("The todo APP", function() {
	var testTodo;
	var testList;

	beforeEach(function() {
		testTodo = new ToDoItem("get milk", false);
		testList = new ToDoList();
	});

	describe("The todo ITEM", function() {
		it("creates a new item with an ITEM name and completion STATUS", function() {
			expect(testTodo.item).toBe("get milk");
			expect(testTodo.status).toBe(false);
		});
	});

	describe("The todo LIST", function() {
		it("creates a todo list", function() {
			expect(testList).toEqual(jasmine.any(Object));
		});
		
		it("adds an item to the list", function() {
			expect(testList.list.length).toEqual(0);
			testList.addToList(testTodo);
			expect(testList.list.length).toEqual(1);
		});
		
		it("deletes an item from the list", function() {
			// prep list with item to delete
			testList.addToList(testTodo);
			expect(testList.list.length).toEqual(1);

			// delete prepped item from list
			testList.deleteFromList();
			expect(testList.list.length).toEqual(0);
		});

		// I don't really know how to get it to show that the function showList displayed items in the list, or that it was called
		// I think this is a bad test
		it("displays all items on the list", function() {
			spyOn(testList, 'showList');
			testList.addToList(testTodo);
			testList.showList();
			expect(testList.showList).toHaveBeenCalled();
			expect(testList.list.length).toEqual(1);
		});

		// this a bad test, too, right?
		it("displays a message if there are no items on list", function() {
			spyOn(testList, 'showList');
			// testList starts as empty
			testList.showList();
			expect(testList.showList).toHaveBeenCalled();
			expect(testList.list.length).toEqual(0);
		});
	});

	describe("The todo PAGE", function() {
		// beforeEach(function() {
		// 	testList.showList();
		// });

		it("has a LIST display area", function() {
			expect(document.getElementById("list-display")).toBeDefined();
		});

		it("has a list ITEM display area", function() {
			expect(document.getElementsByClassName("list-item")).toBeDefined();
		});

		// this is a bad test, too?
		it("displays list ITEM(S) on page", function() {
			// var dummyListItem = document.createElement("li");
			// document.getElementsByClassName = jasmine.createSpy("HTML Element").and.returnValue(dummyListItem);
 
 			var dummyListItem = `<li class="list-item">${testTodo.item}</li>`
			expect(dummyListItem).toContain("get milk");
		});
	});
});