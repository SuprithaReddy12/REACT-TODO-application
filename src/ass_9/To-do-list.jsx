import React, { useState } from "react";
import "./to-do.css"


const Assignment9 = () => {

	const [items, setItems] = useState("");
	const [todos, setTodos] = useState([]);
	const [edit, setEdit] = useState("Add Item");
	const [id, setId] = useState(0);

	const handleChange = () => {
		if (items.trim() !== "") {
			const newTodos = [...todos, items]
			setTodos(newTodos);
			setItems("")
		}
	}

	const handleDelete = (index) => {
		const delTodo = todos.filter((items, index1) => index1 !== index);
		setTodos([...delTodo]);
	}

	const handleEdit = (id) => {
		setId(id)
		setEdit("Edit")
		setItems(todos[id]);
	}

	const ButtonEdit = (e) => {
		if (items !== "") {
			setEdit("Add Item");
			todos.splice(id, 1, items);
			setItems("");
		}
	}

	return (
		<>
			<div className="container">
				<h1>To-Do-List</h1>
				<div className="row">
					<input className="task" value={items} onChange={(e) => { setItems(e.target.value) }}></input>
					<div id="btn" onClick={(e) => { edit === "Edit" ? ButtonEdit(e) : handleChange(e) }}>{edit}</div>
				</div>

				<ul className="to-do">
					{todos.map((todo, index) => {
						return (
							<li className="list" key={index}>
								<span className="to-do-text">{todo}</span>
								<div className="edit" onClick={() => { handleEdit(index) }}>Edit</div>
								<div className="edit" onClick={() => { handleDelete(index) }}>Delete</div>
							</li>
						)
					})
					}
				</ul>
			</div>
		</>
	)
};

export default Assignment9;