import {useState} from 'react';
import {useNavigate} from 'react-router';

import {useTodos} from '@hooks';
import {LocalStorage} from '@services';
import {CheckBox} from '@components';
import {plusIcon, trashIcon, submitIcon} from '@assets';

import './TodosPage.css';

const TodosPage = () => {
  const {todos, isLoading} = useTodos();
  const [showInputs, setShowInputs] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    LocalStorage.clear();
    navigate('/');
  };

  return (
    <>
      <button className="logout-button" onClick={logOut}>
        LogOut
      </button>

      <h1 className="todos-heading">Less is More</h1>

      <div className="todos-container">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="todos-list">
              {todos.length === 0 ? (
                <div className="empty">Hmm...No Tasks found.</div>
              ) : (
                todos?.map((todo, index) => (
                  <div key={index} className="todo-item">
                    <CheckBox id={todo._id} checked={todo.isComplete} />
                    <label
                      htmlFor={`task${todo._id}`}
                      className={`todo-label ${
                        todo.isComplete ? 'completed' : ''
                      }`}
                    >
                      {todo.title}
                      <span className="todo-description">
                        {todo.description}
                      </span>
                    </label>
                    <img src={trashIcon} className="trash-icon" />
                  </div>
                ))
              )}
            </div>
            <button
              className="add-button"
              onClick={() => setShowInputs(!showInputs)}
            >
              <img
                src={plusIcon}
                className={`${!showInputs ? '' : 'plus-icon'}`}
              />
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
          </>
        )}
      </div>
    </>
  );
};

export default TodosPage;
