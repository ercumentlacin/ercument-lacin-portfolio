import React from "react";

const CommentComponent = messageList => {
  const handleDelete = e => {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
  };
  return (
    <>
      {messageList.messageList.names &&
        messageList.messageList.names.map((item, index) => (
          <div
            className="shadow-sm p-3 mb-5 bg-white rounded"
            key={index}
            id={`comment-${index}`}
          >
            <p className="mb-0">
              <strong className="text-muted">{item}</strong>
            </p>
            <hr />
            <p className="mb-0">{messageList.messageList.messages[index]}</p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                onClick={handleDelete}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default CommentComponent;
