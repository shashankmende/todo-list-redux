import logo from './logo.svg';
import './App.css';
import './reducer'; // Ensure your reducer is properly set up in the store

import { addTodo,editTodoBool,deleteTodo,updateTodo } from './action'; // Ensure your addTodo action is properly defined
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoTitle, setTodoTitle] = useState(''); // Correctly initialize useState with an empty string
  const data = useSelector((state) => state.todos);
  // console.log('data', data);
  const dispatch = useDispatch();

  return (
    <div className="container App margin-auto mt-5">
      <div className="row">
        <h1 className="text-success">Todo list  with React Redux</h1>
        <div className="col-5 mt-3">
          <input
            type="text"
            placeholder="Enter Todo"
            className="form-control"
            onChange={(e) => setTodoTitle(e.target.value)}
            value={todoTitle} 
          />
        </div>
        <div className="col-2 mt-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (todoTitle){
              const todo = {
                id: uuidv4(),
                title: todoTitle,
              };
              dispatch(addTodo(todo));
              setTodoTitle(''); 
            }
            }}
          >
            Add Todo
          </button>
        </div>
        <ul className='col-6'>

           {data && data.map(each => (
    <li className='todo-item' key={each.id}>
        {each.edit !== undefined && each.edit ? (
            <input
                type='text'
                className='form-control w-50'
                value={each.title}
                onChange={e => {
                    const updatedTodo = {
                        id: each.id,
                        title: e.target.value,
                        edit: false // Ensure edit is handled correctly
                    };
                    dispatch(updateTodo(updatedTodo));
                }}
            />
        ) : (
            <p className='todo-title'>{each.title}</p>
        )}
        <div className='icons-container'>
            {!each.edit ? (
                <i
                    className="fa-regular fa-pen-to-square edit-icon"
                    onClick={() => {
                        dispatch(editTodoBool(each));
                    }}
                ></i>
            ) : (
                <i
                    className="fa-regular fa-floppy-disk text-success edit-icon"
                    onClick={() => {
                        dispatch(editTodoBool(each));
                    }}
                ></i>
            )}
            <i
                className="fa-solid fa-trash text-danger edit-icon"
                onClick={() => {
                    dispatch(deleteTodo(each));
                }}
            ></i>
        </div> 
    </li>
))}



        </ul>
      </div>
    </div>
  );
}

export default App;
