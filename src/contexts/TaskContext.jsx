import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const taskContext = createContext({
  tasks: null,
  addTask: () => {},
  removeTask: () => {},
  updateComplete: () => {},
  updateTitle: () => {},
});

const TaskData = localStorage.getItem("tasks") || "[]";
let data = [];
if (TaskData) {
  data = JSON.parse(TaskData);
}

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(data);

  function addTask(title) {
    const id = crypto.randomUUID();
    const newTask = { id, title, isComplete: false };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    saveToLocalStorage([newTask, ...tasks]);
  }

  function removeTask(id) {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
    saveToLocalStorage(updateTask);
  }

  function updateTitle(id, newTitle) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      );

      saveToLocalStorage(updatedTasks);

      return updatedTasks;
    });
  }

  function updateComplete(id) {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task,
      );

      return [...updatedTasks].sort((a, b) => a.isComplete - b.isComplete);
    });
  }
  return (
    <taskContext.Provider
      value={{ tasks, addTask, removeTask, updateComplete, updateTitle }}
    >
      {children}
    </taskContext.Provider>
  );
}

function saveToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
