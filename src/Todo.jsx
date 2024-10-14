import { useEffect } from "react";

const Todo = ({ description, deleteThing, index, completeThing, isCompleted }) => {
  useEffect(() => {
    console.log("Imaneffect");
  }, []);
  return (
    <div style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      <h2>{description}</h2>
      <button onClick={() => deleteThing(index)}>Delete</button>
      <button onClick={() => completeThing(index)}>Mark Complete</button>
    </div>
  );
};

export default Todo;
