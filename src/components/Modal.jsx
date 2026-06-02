import { useContext, useEffect, useState } from "react";
import { taskContext } from "../contexts/taskContext";

export default function Modal({ modal, editTask, setEditTask }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const { addTask, updateTitle } = useContext(taskContext);

  useEffect(() => {
    if (editTask) {
      setEnteredTitle(editTask.title);
    } else {
      setEnteredTitle("");
    }
  }, [editTask]);

  function handleAddTask() {
    if (enteredTitle.trim() === "") {
      return;
    }
    addTask(enteredTitle.trim());
    setEnteredTitle("");
    modal.current.close();
  }

  function handleUpdateTask() {
    if (enteredTitle.trim() === "") {
      return;
    }
    updateTitle(editTask.id, enteredTitle.trim());
    setEnteredTitle("");
    setEditTask(null);
    modal.current.close();
  }
  return (
    <dialog
      ref={modal}
      className=" bg-green-600  rounded-md backdrop:bg-black/50 m-auto w-xl  p-10"
    >
      <h2 className="text-2xl font-semibold text-gray-950 text-center mb-3 py-2">
        {editTask ? "Edit Task" : "Add New Task"}
      </h2>
      <input
        type="text"
        value={enteredTitle}
        onChange={(e) => setEnteredTitle(e.target.value)}
        className="border text-xl font-medium p-2 mb-4 border-green-950 placeholder:text-green-950 w-full focus:outline-none focus:ring-0 focus:border focus:border-green-300"
        placeholder="Enter your task..."
      />
      <form method="dialog" className="flex gap-1 justify-end items-center">
        <button
          type="button"
          onClick={editTask ? handleUpdateTask : handleAddTask}
          className="bg-gray-900 font-semibold text-white px-5 py-1 rounded cursor-pointer"
        >
          {editTask ? "Edit" : "Add"}
        </button>
        <button className="  text-red-700 px-4 py-1 font-semibold underline rounded cursor-pointer">
          Cancel
        </button>
      </form>
    </dialog>
  );
}
