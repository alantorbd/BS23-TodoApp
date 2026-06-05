import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function StateChart({ compltedTask, pendingTask }) {
  Chart.register(ArcElement, Tooltip, Legend, Title);
  const data = {
    labels: ["Completed Tasks", "Pending Tasks"],
    datasets: [
      {
        label: "Total Task",
        data: [compltedTask, pendingTask],
        backgroundColor: ["rgba(0, 211, 144, 0.8)", "rgba(252, 183, 0, 9.8)"],
        borderColor: ["rgba(34, 197, 94, 1)", "rgba(239, 68, 68, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#7af1a7",
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: "Task Completion Status",
        color: "#7af1a7",
        font: {
          size: 30,
        },
      },
    },
  };
  return (
    <div className="bg-green-950 p-6 pt-0 mt-0 rounded-xl shadow-lg w-full max-w-sm mx-auto flex flex-col items-center">
      <Pie data={data} options={options} />
    </div>
  );
}
