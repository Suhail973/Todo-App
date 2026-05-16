import { useState } from 'react'
import '../css/Todo.css'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'

const Todo = () => {
    const [todoName, setTodoName] = useState("")
    const [todos, setTodos] = useState([
        {
            name: 'Learn HTML',
            status: 'completed'
        },
        {
            name: 'Learn React',
            status: 'active'
        }
    ])
    const [filter, setFilter] = useState("All");

    const onInputChange = (e) => {
        const { value } = e.target;
        setTodoName(value)

    }

    const addTodo = () => {
        // todos.push(todoName);
        const todoItem = {
            name: todoName,
            status: 'active'
        }
        const updatedTodos = [...todos, todoItem]
        setTodos(updatedTodos)
        setTodoName("")
    }

    const handleFilterChange = (filterType) => {
        setFilter(filterType);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        addTodo()
    }
    const noTodosAvailable = todos.length === 0;

    const activeTodos = todos.filter(todo => todo.status === 'active')
    const completedTodos = todos.filter(todo => todo.status === 'completed')

    const filteredTodos = filter === "Active" ? activeTodos : filter === "Completed" ? completedTodos : todos;

    const updateStatus = (todo) => {
        const updatedTodos = todos.map(item => {
            if (item.name === todo.name) {
                const currentItemStatus = item.status
                item.status = currentItemStatus === 'active' ? 'completed' : 'active'
            }
            return item
        })

        setTodos(updatedTodos)
    }

    const onDeleteTodo = (todo) => {
        const updatedTodos = todos.filter(item => {
            if (item.name === todo.name) {
                return false
            }
            return true
        })

        setTodos(updatedTodos)
    }

    return (
        <div className="todo-container">
            <h1>My Todo List</h1>
            <form className="input-form" onSubmit={onFormSubmit}>
                <input type="text" value={todoName} onChange={onInputChange} placeholder='Add your todo item!!' />
                <button type='submit' >Add</button>
            </form>
            <TodoFilters activeCount={activeTodos.length} completedCount={completedTodos.length} onFilterChange={handleFilterChange} />
            {
                noTodosAvailable ? (
                    <div className='no-todos'>No Todos Available ...</div>
                ) : (
                    <div className='todos-list'>
                        {
                            filteredTodos.map((todo, index) => {
                                return <TodoItem todo={todo} index={index} updateStatus={updateStatus} onDeleteTodo={onDeleteTodo} />
                            })
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Todo;
