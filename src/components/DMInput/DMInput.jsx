import "./DMInput.css";

import { useState } from "react";

const DMInput = (props) => {
  const { handleMessage } = props;
  const [messageText, setMessageText] = useState("");

  const handleChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleMessage(messageText);
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <div className="cmd">
          {/* <TextareaAutosize className="texta" value={messageText} onChange={handleChange}></TextareaAutosize> */}
          <textarea
            className="texta"
            value={messageText}
            onChange={handleChange}
          />
        </div>
        <button class="btn" type="submit" value="Submit">
          send
        </button>
      </form>
    </div>
  );
};

export default DMInput;
