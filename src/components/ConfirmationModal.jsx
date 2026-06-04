import Button from "./Button";
import Modal from "./Modal";

export default function ConfirmationModal({
  modal,
  removeTask,
  setTaskToDelete,
  taskToDelete,
}) {
  function handleOkayClick() {
    removeTask(taskToDelete.id);
    setTaskToDelete(null);
    modal.current.close();
  }
  return (
    <Modal modal={modal} className={"bg-green-700"}>
      <div>
        <p className=" text-xl mb-10 text-gray-950">
          Are you sure want to permanently remove this items?
        </p>
        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={handleOkayClick}
            className="bg-red-700  text-green-200  hover:bg-red-600 px-8 "
            title="Okay"
          />
          <ModalCloseFromHandle />
        </div>
      </div>
    </Modal>
  );
}

function ModalCloseFromHandle() {
  return (
    <form method="dialog" className="p-0 m-0">
      <Button
        title="Cancel"
        className={"bg-gray-950 hover:bg-gray-900 text-green-200 "}
      />
    </form>
  );
}
