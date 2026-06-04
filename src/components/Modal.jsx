import cn from "../utils/cn";

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
