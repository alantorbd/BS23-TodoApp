import { useContext, useRef, useState } from "react";
import { taskContext } from "../contexts/taskContext";
import Modal from "./Modal";

export default function ShowTaskList() {
  const [editTask, setEditTask] = useState(null);
  const { tasks, removeTask, updateComplete } = useContext(taskContext);
  const modal = useRef();

  function handleEditClick(task) {
    setEditTask(task);
    modal.current.showModal();
  }

  return (
    <>
      <Modal modal={modal} editTask={editTask} setEditTask={setEditTask} />
      <div className="bg-green-950 p-3 mt-2">
        <h2 className="text-2xl font-semibold text-green-100 border-b-2 mb-5">
          Tasks
        </h2>
        <div>
          {tasks.map((task) => {
            return (
              <div
                className="flex gap-5 border-b border-dashed py-2 items-center border-green-300"
                key={task.id}
              >
                <input
                  className="bg-green-300 w-5 h-5 outline-none border-none  block"
                  type="checkbox"
                  readOnly
                  checked={task.isComplete}
                  onClick={() => updateComplete(task.id)}
                />
                <p
                  className={`grow ${task.isComplete ? "line-through" : ""} text-green-200 font-medium text-xl`}
                >
                  {task.title}{" "}
                </p>
                <button
                  className={`cursor-pointer bg-green-700 px-10 py-1 hover:bg-green-600`}
                  hidden={task.isComplete ? true : false}
                  onClick={() => handleEditClick(task)}
                >
                  Edit
                </button>
                <button
                  className="cursor-pointer px-10 py-1 bg-red-700 hover:bg-red-600"
                  onClick={() => removeTask(task.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
