import React, { useState, useRef, useEffect } from "react";
import API from "../utils/API";
export default function AddNote() {
  const [value, setValue] = useState("");

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      alert("Cannot add a blank note");
    } else {
      API.addNote(value).then(() => setValue(""));
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <textarea
          style={{ color: "black" }}
          ref={ref}
          onChange={handleChange}
          value={value}
          name=""
          id=""
          cols="30"
          rows="10"
        />
        <button>Add note</button>
      </form>
    </div>
  );
}
