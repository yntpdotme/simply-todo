import {useState} from 'react';
import {useNavigate} from 'react-router';

import {CheckBox} from '@components';
import {plusIcon, trashIcon, submitIcon} from '@assets';

import './TodosPage.css';

const TodosPage = () => {
  const todos = [
    {
      _id: 1,
      title: 'A',
      description: 'aaaaa',
      isComplete: false,
    },
    {
      _id: 2,
      title: 'b',
      description: 'bbbbb',
      isComplete: true,
    },
    {
      _id: 3,
      title: 'C',
      description: 'ccccc',
      isComplete: false,
    },
  ];

  const [showInputs, setShowInputs] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    navigate('/');
  };

  return (
    <>
      <button className="logout-button" onClick={logOut}>
        LogOut
      </button>

      <h1 className="todos-heading">Less is More</h1>

      <div className="todos-container">
        <div className="todos-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <CheckBox id={todo._id} checked={todo.isComplete} />

              <label
                htmlFor={`task${todo._id}`}
                className={`todo-label ${todo.isComplete ? 'completed' : ''}`}
              >
                {todo.title}
                <span className="todo-description">{todo.description}</span>
              </label>

              <img src={trashIcon} className="trash-icon" />
            </div>
          ))}
        </div>

        <button
          className="add-button"
          onClick={() => setShowInputs(!showInputs)}
        >
          <img src={plusIcon} className={`${!showInputs ? '' : 'plus-icon'}`} />
          Add Task
        </button>

        {showInputs && (
          <div className="add-todo">
            <input type="text" placeholder="Task name" />
            <div className="submit-todo">
              <input
                type="text"
                placeholder="Description"
                className="description"
              />
              <img src={submitIcon} className="submit-icon" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TodosPage;
