import React from "react";
// import { Link } from "react-router-dom";

function Form({ handleText }) {
  // const [inputText, setInputText] = React.useState();
  const inputRef = React.useRef();
  const handleInput = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    handleText(value);
  };

  //   React.useEffect(() => {
  //     inputRef.current.focus();
  //   }, [inputRef]);

  return (
    <div className="formLayout">
      <form onSubmit={handleInput}>
        <input
          className=""
          placeholder="Type here"
          type="text"
          // onChange={handleInputText}
          ref={inputRef}
        />
        {/* <Link to="/"> */}
        <button type="submit" className="formBtn">
          Submit
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default Form;
