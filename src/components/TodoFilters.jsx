const TodoFilters = (props) => {
    const { activeCount, completedCount, onFilterChange } = props;
    const allCount = activeCount + completedCount;
    const updateTodoFilter = (filterType) => {
        // passing message fron child to parent
        // props function call
        onFilterChange(filterType)
    }

    return (
        <div className="todo-filters">
            <div className="filter-btn button-all" onClick={() => updateTodoFilter('All')}>All ({allCount})</div>
            <div className="filter-btn button-active" onClick={() => updateTodoFilter('Active')}>Active ({activeCount})</div>
            <div className="filter-btn button-completed" onClick={() => updateTodoFilter('Completed')}>Completed ({completedCount})</div>
        </div>
    )
}
export default TodoFilters;