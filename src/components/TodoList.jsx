import styled from "styled-components";
import { Button } from "./UI/Button";

const TodoList = ({ dispatch, editHandler, state }) => {
	const handleCheckboxChange = (todo) => {
		dispatch({
			type: "CHECKBOX",
			payload: { id: todo.id, isChecked: !todo.isChecked },
		});
	};

	return (
		<ul>
			{state.map((todo) => (
				<ListItem key={todo.id} checked={todo.isChecked}>
					<TodoText checked={todo.isChecked}>{todo.title}</TodoText>
					<div className="rightBlock">
						<input
							type="checkbox"
							checked={todo.isChecked}
							onChange={() => handleCheckboxChange(todo)}
						/>
						<StyledButton type="button" onClick={() => editHandler(todo)}>
							Edit
						</StyledButton>
						<StyledButton
							onClick={() => {
								dispatch({
									type: "DELETE",
									payload: todo.id,
								});
							}}
							className="todo-delete">
							Delete
						</StyledButton>
					</div>
				</ListItem>
			))}
		</ul>
	);
};

export default TodoList;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: -40px;
	padding: 10px;
	background-color: ${(props) => (props.checked ? "#ccfe" : "#ff2")};
	border-bottom: 1px solid #ccc;
`;

const TodoText = styled.p`
	text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
	color: ${(props) => (props.checked ? "black" : "inherit")};
`;

const StyledButton = styled(Button)`
	margin: 5px;
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;
