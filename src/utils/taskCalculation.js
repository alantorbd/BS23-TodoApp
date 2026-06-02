export default function taskCalculationResult(tasks) {
  if (!tasks) {
    return {
      totalTask: 0,
      totalCompletedTask: 0,
      totalPendingTask: 0,
      completionPercentage: 0.0,
    };
  }
  const totalTask = tasks.length;
  const totalCompletedTask = tasks.reduce(
    (acc, task) => (task.isComplete ? acc + 1 : acc),
    0,
  );
  const totalPendingTask = totalTask - totalCompletedTask;
  const completionPercentage = ((totalCompletedTask / totalTask) * 100).toFixed(
    2,
  );
  return {
    totalTask,
    totalCompletedTask,
    totalPendingTask,
    completionPercentage,
  };
}
