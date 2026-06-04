import cn from "../utils/cn";

export default function StateCard(props) {
  return (
    <div className="flex grow flex-col">
      <div
        className={cn(
          "grow  bg-green-700 flex flex-col gap-3 items-center justify-center p-5 ",
          props.showProgress && "p-2",
        )}
      >
        <h4 className="text-gray-900 text-left text-2xl font-bold">
          {props.title}
        </h4>
        <p
          className={cn(
            "text-green-100  text-center font-extrabold text-4xl",
            props.resultColor,
          )}
        >
          {props.result}{" "}
          <span className="text-gray-900 text-lg font-medium">
            {props.resultType}
          </span>
        </p>
      </div>
      {props.showProgress && (
        <progress
          max={100}
          value={props.result}
          className=" w-full h-4 mt-2  overflow-hidden bg-emerald-900
         [&::-webkit-progress-bar]:bg-emerald-800 [&::-webkit-progress-value]:rounded-full
         [&::-webkit-progress-value]:bg-green-200 
        "
        />
      )}
    </div>
  );
}
