import "./AlertMessage.css";
import { useState } from "react";

const AlertMessage = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="alert-message">
      To run this project, configure the API in the file <b>.env</b>
      <a
        href="https://github.com/NicolasBe23/Gemini-clone#readme"
        target="_blank"
        rel="noopener noreferrer"
      >
        See the README
      </a>
      <button className="close" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default AlertMessage;
