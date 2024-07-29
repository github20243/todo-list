import React from "react";

const Todo = ({ state }) => {
  console.log(state)
	return (
		<div>
			{state.map((item) => {
				return (
					<div className="todo" key={item.id}>
						<div id={item.id} className="todo-title">
							{item.title}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Todo;
