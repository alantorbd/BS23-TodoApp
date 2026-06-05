import cn from "../utils/cn";
import Button from "./Button";

export default function Modal({ modal, className, children }) {
  return (
    <dialog
      ref={modal}
      className={cn(
        " bg-green-600 rounded-md backdrop:bg-black/50 m-auto w-xl  p-10",
        className,
      )}
    >
      {children}
    </dialog>
  );
}

const Footer = (props) => {
  return (
    <div>
      {props.showSubmitBtn && (
        <Button
          title={props.submitBtntitle}
          className={props.submitBtnClassName}
          onClick={props.onSubmit}
        />
      )}
      {props.showCancelBtn && (
        <Button
          title={props.submitBtntitle}
          className={props.submitBtnClassName}
          onClick={props.onSubmit}
        />
      )}
    </div>
  );
};
