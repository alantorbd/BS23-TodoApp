import { createContext, useState } from "react";
import data from "../../data";
// eslint-disable-next-line react-refresh/only-export-components
export const taskContext = createContext({
  tasks: null,
  addTask: () => {},
  removeTask: () => {},
  updateComplete: () => {},
  updateTitle: () => {},
});

export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(data);

  function addTask(title) {
    const id = crypto.randomUUID();
    const newTask = { id, title, isComplete: false };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function removeTask(id) {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  }

  function updateTitle(id, newTitle) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
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
