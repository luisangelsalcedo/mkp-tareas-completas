import React, { useState } from "react";

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

const App = () => {
  const tasksDefault = [
    { id: 1, name: "Sacar la ropa", done: false },
    { id: 2, name: "Hacer la cama", done: true },
    { id: 3, name: "Leer un rato", done: false },
  ];
  const [tasks, setTasks] = useState(tasksDefault);
  const [newTask, setNewTask] = useState("");
  const [classError, setClassError] = useState("");

  const handlerSubmit = event => {
    event.preventDefault();
    if (newTask.length > 0) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, name: newTask, done: false },
      ]);
      setNewTask("");
      setClassError("");
      return;
    }
    setClassError("error");
  };
  const addTask = value => {
    setNewTask(value);
  };
  const setDone = id => {
    tasks.forEach(el => {
      if (el.id === id) el.done = el.done ? false : true;
    });
    setTasks([...tasks]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {tasks.map(({ id, name, done }, index) => (
            <li
              key={id}
              className={done ? "done" : ""}
              onClick={() => setDone(id)}
            >
              {name}
            </li>
          ))}
        </ul>
        <form onSubmit={e => handlerSubmit(e)}>
          <input
            type="text"
            className={classError}
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={newTask}
            onChange={e => addTask(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
