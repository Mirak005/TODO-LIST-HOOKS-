import React, { useState, Fragment } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditModal({ editTodo, todo }) {
  // modalIs open Boolean if true modal show else modal dont show
  const [modalIsOpen, setIsOpen] = useState(false);
  // save the modification         initialize with the old text
  const [text, setText] = useState(todo.text);
  function openModal() {
    setIsOpen(true);
  }

  //close Modal
  function closeModal() {
    setIsOpen(false);
    setText(todo.text);
  }

  //submit modification
  function handelSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      closeModal();
      return alert("Please dont let the todo empty");
    }
    editTodo(todo.id, text);

    // closeModal() is same as : 
    setIsOpen(false);
    setText(todo.text);
  }

  return (
    <Fragment>
      <button className="my-btn" onClick={openModal}>
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handelSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            style={{ padding: "0.5rem 1rem" }}
            type="text"
          />
          <button className="my-btn">Confirm</button>
        </form>
      </Modal>
    </Fragment>
  );
}

export default EditModal;
