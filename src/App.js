import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Toast from "./components/toast";
import Form from "./components/form";
import produce from "immer";
// import { AnimatePresence } from "framer-motion";

export default function App() {
  const [message, setMessage] = React.useState(["message 1"]);
  const [time, setTime] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const handleText = (value) => {
    // setText(value);
    setMessage(
      produce(message, (draft) => {
        draft.push(value);
      })
    );
  };

  const handleDelete = (value) => {
    setMessage(
      produce(message, (draft) => {
        draft.splice(value, 1);
      })
    );
  };

  const handleMouseOver = () => {
    setTime((time) => time + 1);
    setCount(0);
  };

  // const handleMouseOut = () => {
  //   setTime(time - 7000);
  // };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMessage(
        produce(message, (draft) => {
          draft.shift();
        })
      );
      // message.shift();
      // setCount((count) => count + 1);
    }, 7000);

    return () => clearInterval(timer);
  }, [message, time]);

  console.log(message);
  return (
    <Router>
      <div className="layout">
        <nav className="">
          <ul className="">
            <li className="">
              <Link to="/">
                {" "}
                <button className="btn">Component 1</button>
              </Link>
            </li>
            <li className="">
              <Link to="/form">
                <button className="btn">Component 2</button>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Toast
              message={message}
              handleDelete={handleDelete}
              handleMouseOver={handleMouseOver}
              count={count}
              // handleMouseOut={handleMouseOut}
            />
          </Route>
          <Route path="/form">
            <Form handleText={handleText} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
