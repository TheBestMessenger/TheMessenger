import "./ContextMenu.css";

const ContextMenu = () => {
  return (
    <>
      <div className={"message-context-menu"}>
        <button className={"message-context-menu-button"}>
          <img
            className={"icon"}
            src={`/icons/edit-message.svg`}
            alt={"edit icon"}
          />
          <p>Edit</p>
        </button>

        <button className={"message-context-menu-button"}>
          <img
            className={"icon"}
            src={`/icons/copy-icon.svg`}
            alt={"copy icon"}
          />
          <p>Copy</p>
        </button>

        <button className={"message-context-menu-button"}>
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
