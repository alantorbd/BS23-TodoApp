import taskCalculationResult from "../utils/taskCalculation";
import ResultCard from "./StateCard";
import useTask from "../hooks/useTask";
import StateChart from "./StateChart";

export default function ShowAllTaskStats() {
  const { tasks } = useTask();
  const {
    totalTask,
    totalCompletedTask,
    totalPendingTask,
    completionPercentage,
  } = taskCalculationResult(tasks);
  return (
    <>
      <div className="mt-2 ">
        <div className="flex justify-between  items-center p-2 border-t border-b border-dashed border-green-500">
          <h4 className="text-2xl text-green-300 font-bold ml-5">
            Total Number of Task
          </h4>
          <p className="bg-green-700 px-10 py-2 text-2xl font-bold">
            {totalTask}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-2 justify-evenly items-center mt-2 pb-10 p-4">
          <ResultCard
            title="Completed"
            result={totalCompletedTask}
            resultType="Task"
          />
          <ResultCard
            title="Pending"
            result={totalPendingTask}
            resultType="Task"
            resultColor="text-red-800"
          />
          <ResultCard
            title="Progress"
            result={completionPercentage}
            showProgress={true}
            resultType="%"
          />
        </div>
      </div>
      <StateChart
        compltedTask={totalCompletedTask}
        pendingTask={totalPendingTask}
      />
    </>
  );
}
