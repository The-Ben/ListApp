import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { actionCreators } from "../src/store/actions";

export default function AddItem() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = event => {
    return setInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(actionCreators.addToList(input));
    setInput("");
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Add item..."
        value={input}
        onChange={handleInputChange}
      />
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Add
      </Button>
      <Button color="secondary" variant="contained" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}