export default function ResultCard(props) {
  const { title, result, resultType } = props;
  return (
    <div className="grow  bg-green-700 flex flex-col gap-3 items-center justify-center border-r-2  border-green-950 p-5 ">
      <h4 className="text-gray-900 text-left text-2xl font-bold">{title}</h4>
      <p className="text-green-100  text-center font-extrabold text-4xl">
        {result}{" "}
        <span className="text-gray-900 text-lg font-medium">{resultType}</span>
      </p>
    </div>
  );
}
