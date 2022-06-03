import "./ContextMenu.css";
import { useContext } from "react";
import { BACKEND_SERVER_ROOT } from "../../config";
import UserContext from "../../contexts/UserContext";

const ContextMenu = (props) => {
  const { message_id, chat_id } = props;
  const userContext = useContext(UserContext);

  function editButton() {
    fetch(BACKEND_SERVER_ROOT + chat_id + "/editMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authorId: userContext.authorId,
        message_id: message_id,
        new_msg: "edited",
      }),
    });
  }

  function deleteButton() {
    fetch(BACKEND_SERVER_ROOT + chat_id + "/deleteMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authorId: userContext.authorId,
        message_id: message_id,
      }),
    });
  }

  return (
    <>
      <div className={"message-context-menu"}>
        <button className={"message-context-menu-button"} onClick={editButton}>
          <img
            className={"icon"}
            src={`/icons/edit-message.svg`}
            alt={"edit icon"}
          />
          <p>Edit</p>
        </button>

        <button
          className={"message-context-menu-button"}
          onClick={deleteButton}
        >
          <img
            className={"icon"}
            src={`/icons/trash-icon.svg`}
            alt={"delete icon"}
          />
          <p>Delete</p>
        </button>
      </div>
    </>
  );
};

export default ContextMenu;
