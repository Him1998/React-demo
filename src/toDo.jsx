import React, { useState } from 'react';

//component to Perform toDo 
const TodoApp = () => {
  const [newTask, setNewTask] = useState('');
  const [done, setdone] = useState([]);
  const [tasks, setTasks] = useState([]);

  //handles addition of new task
  const handleAdd = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }else{
        alert('Write task name')
    }
  };


  return (
    <div>
      <label htmlFor="add">Add to-do task</label>
      <input
        id="add" placeholder="input task here" value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <h3>inProgress Tasks</h3>
      <div className="box">
        <div>
{/*    display all to do task          */}
          {tasks.map((task, i) => (
            <p key={i}>{task}<button onClick={() => {
                const remaining = tasks.filter((t,j)=> j!==i);
                setdone([...done , task])
                setTasks(remaining);
            }}>finished ?</button></p>
          ))}
        </div>
      </div>

      <h3>Completed Tasks</h3>
      <div className="box">
        <div>
{/*    display all done tasks          */}
          {done.map((elem, i) => (
            <p className='done' key={i}>{elem}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
