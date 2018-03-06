var app = angular.module("TodoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
	this.editMode = false;

	this.todos =[
    "Learn Angular 1",
    "try out exercises", 
    "Visit java Brains site"

	];

	this.addNewTodo = function(){//add new todo to the array
		this.todos.push(this.newTodo);
		this.newTodo = "";
	}

	this.triggerEditMode = function(){
      this.editMode = !this.editMode;
	}

    this.deleteTodo = function(){
    	this.todos.splice(index, 1);
    }

}