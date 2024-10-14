import { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <form onSubmit={submit}>
        <h2>New Todo</h2>
        <input type="text"
          className="todoinput"
          value={value}
          placeholder="Thing to do"
          onChange={(event) => setValue(event.target.value)} />
      </form>
      <button>Submit</button>
    </>
  );
};

export default Form
