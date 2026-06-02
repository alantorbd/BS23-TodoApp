import { useContext } from "react";
import { taskContext } from "../contexts/taskContext";
import taskCalculationResult from "../utils/taskCalculation";

export default function ShowAllTaskStats() {
  const { tasks } = useContext(taskContext);
  const {
    totalTask,
    totalCompletedTask,
    totalPendingTask,
    completionPercentage,
  } = taskCalculationResult(tasks);
  return (
    <div className="mt-2 ">
      <div className="flex justify-between  items-center p-2 border-t border-b border-dashed border-green-500">
        <h4 className="text-2xl text-green-100 font-bold ml-5">
          Total Number of Todos
        </h4>
        <p className="bg-green-700 px-10 py-2 text-2xl font-bold">
          {totalTask}
        </p>
      </div>
      <div className="flex justify-evenly items-center mt-2">
        <div className=" text-center bg-green-700 flex flex-col gap-5 border p-5 border-green-50">
          <h4 className="text-green-100 text-2xl font-bold">Pending</h4>
          <p className="text-red-600 font-extrabold text-4xl">
            {totalPendingTask}
          </p>
        </div>
        <div className=" text-center">
          <h4>Completed</h4>
          <p>{totalCompletedTask}</p>
        </div>
      </div>
      <div>
        <h4>Completion Percentage</h4>
        <p>{completionPercentage} %</p>
      </div>
    </div>
  );
}
