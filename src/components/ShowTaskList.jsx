import { useRef, useState } from "react";

import InputModal from "./InputModal";
import Button from "./Button";
import useTask from "../hooks/useTask";
import ConfirmationModal from "./ConfirmationModal";

export default function ShowTaskList() {
  const [editTask, setEditTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const { tasks, removeTask, updateComplete } = useTask();
  const modalRef = useRef();
  const confirmationModalRef = useRef();

  function handleEditClick(task) {
    setEditTask(task);
    modalRef.current.showModal();
  }

  function handleDeleteClick(task) {
    setTaskToDelete(task);
    confirmationModalRef.current.showModal();
  }

  return (
    <>
      <ConfirmationModal
        modal={confirmationModalRef}
        removeTask={removeTask}
        setTaskToDelete={setTaskToDelete}
        taskToDelete={taskToDelete}
      />
      <InputModal
        modal={modalRef}
        editTask={editTask}
        setEditTask={setEditTask}
      />

      <div className="bg-green-950 p-3 mt-2">
        <h2 className="text-2xl font-semibold text-green-100 border-b-2 mb-5">
          Tasks
        </h2>
        <div>
          {tasks.length === 0 && (
            <p className="text-green-200 text-xl text-center">
              There is no Task Present.
            </p>
          )}
          {tasks.length !== 0 &&
            tasks.map((task) => {
              return (
                <div
                  className="flex flex-wrap gap-5 border-b border-dashed py-2 items-center border-green-300"
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
                    className={`grow basis-25 ${task.isComplete ? "line-through" : ""} text-green-200 font-medium text-xl`}
                  >
                    {task.title}{" "}
                  </p>

                  <Button
                    className={` bg-green-700  hover:bg-green-600 py-1`}
                    hidden={task.isComplete ? true : false}
                    onClick={() => handleEditClick(task)}
                    title="Edit"
                  />

                  <Button
                    className="py-1 bg-red-700 hover:bg-red-600"
                    onClick={() => handleDeleteClick(task)}
                    title="Delete"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
