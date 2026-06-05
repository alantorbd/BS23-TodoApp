import { useRef } from "react";
import InputModal from "../components/InputModal";
import ShowTaskList from "../components/ShowTaskList";
import Button from "../components/Button";

export default function Home() {
  const modal = useRef();
  return (
    <>
      <InputModal modal={modal} />
      <div className="px-5 pt-2 w-full flex flex-col">
        <Button
          className={
            "text-right dark:bg-green-950 bg-gray-950 text-green-200 self-end  hover:bg-gray-900"
          }
          onClick={() => modal.current?.showModal()}
          title="+ Add New Task"
        />

        <ShowTaskList />
      </div>
    </>
  );
}
