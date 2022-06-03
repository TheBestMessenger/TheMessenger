import "./ContextMenu.css";

const ContextMenu = (props) => {
  const { message_id, handleEdit, handleDelete } = props;

  return (
    <>
      <div className={"message-context-menu"}>
        <button
          className={"message-context-menu-button"}
          onClick={() => {
            handleEdit(message_id);
          }}
        >
          <img
            className={"icon"}
            src={`/icons/edit-message.svg`}
            alt={"edit icon"}
          />
          <p>Edit</p>
        </button>

        <button
          className={"message-context-menu-button"}
          onClick={() => {
            handleDelete(message_id);
          }}
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
