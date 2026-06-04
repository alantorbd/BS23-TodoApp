import taskCalculation from "../utils/taskCalculation";
import useTask from "../hooks/useTask";
import StateChart from "./StateChart";
import StateCard from "./StateCard";

export default function ShowAllTaskStats() {
  const { tasks } = useTask();
  const [pendingTask, completedTask, cardInfo] = taskCalculation(tasks);
  const totalTask = completedTask + pendingTask;
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
          {cardInfo.map((card) => {
            return (
              <StateCard
                title={card.title}
                result={card.value}
                resultType={card.isProgress ? "%" : "Task"}
                resultColor={card.title === "Pending" && "text-red-600"}
              />
            );
          })}
        </div>
      </div>
      {totalTask > 0 && (
        <StateChart compltedTask={completedTask} pendingTask={pendingTask} />
      )}
    </>
  );
}
