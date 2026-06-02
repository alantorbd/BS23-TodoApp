import ShowAllTaskStats from "../components/ShowAllTaskStats";

export default function Stats() {
  return (
    <div className="m-5 bg-green-950">
      <h2 className="text-3xl font-semibold text-center text-green-200 border-b-4 border-green-300 py-2">
        Task Summary
      </h2>
      <ShowAllTaskStats />
    </div>
  );
}
