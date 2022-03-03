// importing react library to use react logic such as jsx and useState
import React, { useState } from "react";

// function that will contain everything needed to let the todo list run
export const UserInput = () => {
	// state that will contain the first input where you initially enter a todo item
	// before pressing enter
	// listItem starting value (empty string)
	// setListItem allows the input value to be passed to new array and clear the
	// first input after pressing enter
	const [listItem, setListItem] = useState("");
	// variable is an empty array created to put a new todo item's string inside
	// setVariable will be used to update the empty array to the new string value AND
	//  clear the array when x div is clicked
	const [variable, setVariable] = useState([]);
	// this is a function to spark an event when enter is pressed
	const todoItem = (event) => {
		if (event.keyCode === 13) {
			//variable is an empty array. listItem is the value of what we type in
			// initial input thanks to line __
			const newTodoItem = [...variable, listItem];
			// newTodoItem would look like [[],"initial string"]
			// BUT since we used spread operator (...) it gets rid of the array inside array and
			// give us: ["initial string"] just the array with string inside.
			setVariable(newTodoItem);
			// next the variable is reset as this array. the value of the initial input is
			setListItem("");
			// set to empty string to clear initial input
		}
	};
	// variable is an array that looks like ["first item to do", "second item to do", "third item to do"]
	// we are mapping this array called variable so we can maniupulate it to make it more like:
	// ["first item to do"] ["second item to do"] ["third item to do"]
	// then we will render the value of each array, which will become the new todo items on the userinterface
	const todo = variable.map((item, index) => {
		console.log("item", item);
		console.log("index", index);
		console.log("variable", variable);
		return (
			// the item is the string item of the array called variable such as: ["first thing"] (first thing =item)
			// looks like key={index} allows you to choose a different item in array
			// array is set up like: ["this is index 1", "this is index 2"]
			<li className="list-group-item item" key={index}>
				{item}

				<div className="mouseOver" onClick={() => remove(index)}>
					x
				</div>
			</li>
		);
	});

	const remove = (index) => {
		const removeItem = variable.filter((item, i) => i != index);
		setVariable(removeItem);
	};

	return (
		<div>
			<div>
				<input
					type="text"
					className="item userInput"
					onKeyDown={todoItem}
					value={listItem}
					onChange={(e) => setListItem(e.target.value)}
					placeholder="What needs to be done?"
				/>
			</div>
			<div>
				<ul>{todo}</ul>
			</div>
			<div> {todo.length} items left</div>
		</div>
	);
};
