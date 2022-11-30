import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodoList = [
  {
    id: uuidv4(),
    todo: 'Learn HTML',
    date: new Date().toString().split('GMT')[0],
    isDone: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodoList,
    todo: '',
    requiredTodo: false,
  }

  getUserTodo = e => {
    this.setState({todo: e.target.value})
  }

  addToMyTasks = () => {
    const {todo} = this.state
    if (todo === '') {
      this.setState({requiredTodo: true})
    } else {
      const newTodo = {
        id: uuidv4(),
        todo,
        date: new Date().toString().split('GMT')[0],
        isDone: false,
      }
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        todo: '',
        requiredTodo: false,
      }))
    }
  }

  onDeleteTodoItem = id => {
    const {todoList} = this.state

    const filterTodos = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: filterTodos})
  }

  onStrikeOffTodo = id => {
    const {todoList} = this.state

    const filterData = todoList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, isDone: !eachTodo.isDone}
      }
      return eachTodo
    })
    this.setState({todoList: filterData})
  }

  render() {
    const {todoList, requiredTodo} = this.state
    console.log(todoList)
    return (
      <div className="app-container">
        <h1 className="app-heading">Todos</h1>
        <h1 className="todo-sub-title">
          Create <span>Task</span>
        </h1>
        <input
          className="user-input"
          type="text"
          placeholder="Whats need to be done?"
          onChange={this.getUserTodo}
        />
        {requiredTodo && <p className="error-msg">*Required</p>}
        <button
          type="button"
          className="add-button"
          onClick={this.addToMyTasks}
        >
          Add
        </button>
        <div className="my-task-container">
          <h1 className="todo-sub-title">
            My <span>Tasks</span>
          </h1>
          <ul>
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                onDeleteTodoItem={this.onDeleteTodoItem}
                eachTodoDetails={eachTodo}
                onStrikeOffTodo={this.onStrikeOffTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
