import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListaTareas = () => {
  const [task, setTask] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const input = formData.get("tarea");
    if (input !== "" && !task.includes(input)) setTask([...task, input]);
    form.reset();
  };

  const deleteTask = (value) => {
    const taskdelete = task.filter((t) => t !== value);
    setTask([...taskdelete]);
  };

  return (
    <>
      <div>
        <form onSubmit={addTask}>
          <input type="text" name="tarea" />
          <input type="submit" />
        </form>
      </div>
      <div>
        <h4>tareas</h4>
        {task.map((l) => (
          <>
            <li key={l}>
              {l}{" "}
              <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(l)} />
            </li>
          </>
        ))}
      </div>
    </>
  );
};

export default ListaTareas;
