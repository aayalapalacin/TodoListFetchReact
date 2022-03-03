import React, { useState } from "react";

export const UserInput = () => {
	const [listItem, setListItem] = useState("");
	const handleListItem = (event) => {
		setListItem(event.target.value);
	};
	const todoItem = (event) => {
		if (event.keycode === 13) {
			return true;
		} else {
			return false;
		}
	};
	console.log(todoItem);
	return (
		<div>
			<input
				type="text"
				className="item userInput"
				placeholder="What needs to be done?"
				onChange={handleListItem}
			/>
			{todoItem && (
				<input
					type="text"
					className="item"
					value={listItem}
					onChange={handleListItem}
				/>
			)}

			<input type="text" className="item itemsLeft" />
		</div>
	);
};
