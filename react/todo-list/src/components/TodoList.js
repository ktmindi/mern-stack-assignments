const TodoList = (props) => {
    const todoClasses= [""];
    if (props.todo.complete){
        todoClasses.push("line-through");
    }


    return (
        <div>
        <input onChange={(event) => {
            props.handleCheck(props.i);
        }} checked={props.todo.complete} type ="checkbox" />
        <span className={todoClasses.join("")}>{props.todo.text}</span>
        <button onClick={(event) => {
            props.handleDelete(props.i);
        }}>Delete</button>
        </div>
    );
}


export default TodoList;