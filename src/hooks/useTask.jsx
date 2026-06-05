import { useContext } from "react";
import { taskContext } from "../contexts/taskContext";

export default function useTask() {
  return useContext(taskContext);
}
