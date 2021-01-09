import React, { useState, useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import CommentComponent from "./CommentComponent";
let newNameArr = [];
let newMessageList = [];
const Comments = props => {
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";

  const [messageList, setMessageList] = useState([
    {
      names: "",
      messages: ""
    }
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setName(event.target.value);
  };
  const handleChangeMessage = e => {
    setMessage(event.target.value);
  };
  const handleSubmit = e => {
    newNameArr.push(name);
    newMessageList.push(message);
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
    e.preventDefault();

    setMessageList({ names: newNameArr, messages: newMessageList });
  };

  return (
    <div className={`py-5 mt-5 container bg-${theme} text-${constrat}`}>
      <div className="d-flex flex-row align-items-center">
        <form onSubmit={handleSubmit} className="mx-auto w-75">
          <div className="mt-5">
            <label className="form-label" />
            <input
              onChange={handleChange}
              name="userName"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name.."
            />
          </div>
          <div className="mb-3">
            <label className="form-label" />
            <textarea
              onChange={handleChangeMessage}
              name="userMessage"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type your Message Here"
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <hr />
      <h1 className="text-center">Comments</h1>
      <CommentComponent messageList={messageList} />
    </div>
  );
};

export default Comments;
