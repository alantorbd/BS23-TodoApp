import { useRef } from "react";
import Modal from "../components/Modal";
import ShowTaskList from "../components/ShowTaskList";
import Button from "../components/Button";

export default function Home() {
  const modal = useRef();
  return (
    <>
      <Modal modal={modal} />
      <div className="px-5 pt-2 w-full flex flex-col">
        <Button
          className={
            "text-right bg-gray-950 text-green-200 self-end  hover:bg-gray-900"
          }
          onClick={() => modal.current?.showModal()}
        >
          + Add New Task
        </Button>
        <ShowTaskList />
      </div>
    </>
  );
}
