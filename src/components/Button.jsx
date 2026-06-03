import cn from "../utils/cnFunction";

export default function Button({ className, children, ...props }) {
  return (
    <button className={cn(" px-10 py-2  cursor-pointer", className)} {...props}>
      {children}
    </button>
  );
}
