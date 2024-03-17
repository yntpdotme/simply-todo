import {useState} from 'react';
import {useNavigate} from 'react-router';

import {useTodos} from '@hooks';
import {LocalStorage, TodoService} from '@services';
import {CheckBox} from '@components';
import {plusIcon, trashIcon, submitIcon} from '@assets';

import './TodosPage.css';

const TodosPage = () => {
  const {todos, isLoading, setTodos, setError} = useTodos();
  const [showInputs, setShowInputs] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    userId: '',
  });

  const navigate = useNavigate();

  const logOut = () => {
    LocalStorage.clear();
    navigate('/');
  };

  const createTodo = async () => {
    if (!newTodo.title || !newTodo.description) return;

    const oldTodos = [...todos];

    try {
      // Update the UI optimistically
      setTodos([...todos, newTodo]);

      // API Call
      const response = await TodoService.createTodo(newTodo);

      // Update the UI with the response data
      setTodos([...todos, response.data.data]);
      setNewTodo({
        title: '',
        description: '',
        userId: '',
      });
    } catch (error) {
      setError(error.message);

      // Revert the UI Update
      setTodos(oldTodos);
    }
  };

  const updateTodo = async todo => {
    const oldTodos = [...todos];

    try {
      const updatedTodo = {...todo, isComplete: !todo.isComplete};

      // Update the UI optimistically
      setTodos(todos.map(t => (t._id === todo._id ? updatedTodo : t)));

      // API Call
      await TodoService.updateTodo(updatedTodo);
    } catch (error) {
      setError(error.message);
      // Revert the UI Update
      setTodos(oldTodos);
    }
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
                    <CheckBox
                      id={todo._id}
                      checked={todo.isComplete}
                      onChange={() => {
                        updateTodo(todo);
                      }}
                    />

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
                <input
                  type="text"
                  placeholder="Task name"
                  value={newTodo.title}
                  onChange={e =>
                    setNewTodo(old => ({...old, title: e.target.value}))
                  }
                />
                <div className="submit-todo">
                  <input
                    type="text"
                    placeholder="Description"
                    value={newTodo.description}
                    onChange={e =>
                      setNewTodo(old => ({...old, description: e.target.value}))
                    }
                    className="description"
                  />
                  <img
                    src={submitIcon}
                    className="submit-icon"
                    onClick={createTodo}
                  />
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
