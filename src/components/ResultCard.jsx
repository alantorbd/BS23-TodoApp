import cn from "../utils/cnFunction";

export default function ResultCard(props) {
  const { title, result, resultType, resultColor } = props;
  return (
    <div className="grow  bg-green-700 flex flex-col gap-3 items-center justify-center p-5 ">
      <h4 className="text-gray-900 text-left text-2xl font-bold">{title}</h4>
      <p
        className={cn(
          "text-green-100  text-center font-extrabold text-4xl",
          resultColor,
        )}
      >
        {result}{" "}
        <span className="text-gray-900 text-lg font-medium">{resultType}</span>
      </p>
    </div>
  );
}
