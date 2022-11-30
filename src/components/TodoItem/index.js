import {MdDeleteOutline} from 'react-icons/md'
import './index.css'

const TodoItem = props => {
  const {eachTodoDetails, onDeleteTodoItem, onStrikeOffTodo} = props
  const {todo, id, date, isDone} = eachTodoDetails

  const deleteTodo = () => {
    onDeleteTodoItem(id)
  }

  const strikeOff = () => {
    onStrikeOffTodo(id)
  }

  const strike = isDone ? 'strike-off' : null

  return (
    <li className="todo-item-container" key={id}>
      <input
        id={id}
        type="checkbox"
        className="check-box"
        onChange={strikeOff}
      />
      <div className="todo-title-container">
        <div>
          <label htmlFor={id} className={`todo-title ${strike}`}>
            {todo}
          </label>
          <p className="date">{date}</p>
        </div>
        <MdDeleteOutline className="delete-icon" onClick={deleteTodo} />
      </div>
    </li>
  )
}
export default TodoItem
