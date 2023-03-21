import React, { useState } from "react";
import Modal from "../lib/modal";
import customCloseIcon from "./close.svg";

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  const save = (e) => {
    e.preventDefault();
    setModalActive(true);
  };

  const close = (e) => {
    setModalActive(false);
  };

  const modalContent = (
    <div>
      <p>Successful Save!</p>
    </div>
  );

  return (
    <div>
      <button onClick={save}> Click here to save</button>

      <Modal
        content={modalContent}
        close={close}
        modalState={modalActive}
        closeIcon={customCloseIcon}
      />
    </div>
  );
};

export default App;
