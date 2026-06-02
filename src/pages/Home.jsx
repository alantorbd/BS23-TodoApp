import { useRef } from "react";
import Modal from "../components/Modal";
import ShowTaskList from "../components/ShowTaskList";

export default function Home() {
  const modal = useRef();
  return (
    <>
      <Modal modal={modal} />
      <div className="px-5 pt-2 w-full flex flex-col">
        <button
          className="text-right bg-gray-950 text-green-200 self-end px-5 py-2 hover:bg-gray-900 cursor-pointer"
          onClick={() => modal.current?.showModal()}
        >
          + Add New Task
        </button>
        <ShowTaskList />
      </div>
    </>
  );
}
