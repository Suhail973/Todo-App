const TodoItem = ({ todo, updateStatus, onDeleteTodo }) => {
    const { name, status } = todo;

    const onStatusUpdate = () => {
        // passing my complete todo to the parent component (like passign message)
        updateStatus(todo)
    }

    const handleDelete = () => {
        onDeleteTodo(todo)
    }

    const isCompletedTodo = status === 'completed'

    return (
        <div className="todo-item-wrapper">
            <input
                type="checkbox"
                onChange={onStatusUpdate}
                checked={isCompletedTodo}
            />
            <p className={isCompletedTodo ? 'strike-off': ''}>{name}</p>
            <button className="delete-btn"  onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default TodoItem;