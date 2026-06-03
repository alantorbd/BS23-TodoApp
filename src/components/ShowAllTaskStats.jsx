import { useContext } from "react";
import { taskContext } from "../contexts/taskContext";
import taskCalculationResult from "../utils/taskCalculation";
import ResultCard from "./ResultCard";

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
          Total Number of Task
        </h4>
        <p className="bg-green-700 px-10 py-2 text-2xl font-bold">
          {totalTask}
        </p>
      </div>
      <div className="flex justify-evenly items-center mt-2 pb-10 p-4">
        <ResultCard
          title="Completed"
          result={totalCompletedTask}
          resultType="Task"
        />
        <ResultCard
          title="Pending"
          result={totalPendingTask}
          resultType="Task"
        />
        <ResultCard
          title="Progress"
          result={completionPercentage}
          resultType="%"
        />
      </div>
    </div>
  );
}
