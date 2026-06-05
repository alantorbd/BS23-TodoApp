import cn from "../utils/cn";
import Button from "./Button";

export default function Modal(props) {
  return (
    <div className="fixed inset-0 z-100 flex justify-center items-center  bg-green-950/0  rounded-md backdrop-blur-sm ">
      <div className={cn("bg-green-700 p-10", props.className)}>
        {props.children}
        <Footer props={props} />
      </div>
    </div>
  );
}

const Footer = ({ props }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {props.showSubmitBtn && (
        <Button
          title={props.submitBtnTitle}
          className={cn(
            "bg-red-700  text-green-200  hover:bg-red-600 px-8",
            props.submitBtnClassName,
          )}
          onClick={props.onSubmit}
        />
      )}
      {props.showCancelBtn && (
        <Button
          title={props.cancelBtnTitle}
          className={cn(
            "bg-gray-950 hover:bg-gray-900 text-green-200 ",
            props.cancelBtnClassName,
          )}
          onClick={props.onCancel}
        />
      )}
    </div>
  );
};
