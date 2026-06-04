export default function taskCalculation(tasks) {
  const totalTask = tasks.length;
  const totalCompletedTask = tasks.reduce(
    (acc, task) => (task.isComplete ? acc + 1 : acc),
    0,
  );
  const totalPendingTask = totalTask - totalCompletedTask;
  let completionPercentage = 0;
  if (totalTask !== 0) {
    completionPercentage = ((totalCompletedTask / totalTask) * 100).toFixed(0);
  }

  // return {
  //   totalTask,
  //   totalCompletedTask,
  //   totalPendingTask,
  //   completionPercentage,
  // };

  return [
    totalPendingTask,
    totalCompletedTask,
    [
      {
        title: "Completed",
        value: totalCompletedTask,
        isProgress: false,
      },
      {
        title: "Pending",
        value: totalPendingTask,
        isProgress: false,
      },
      {
        title: "Progress",
        value: completionPercentage,
        isProgress: true,
      },
    ],
  ];
}
