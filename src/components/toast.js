import React from "react";
import { ImCross } from "react-icons/im";
import moment from "moment";
// import { AnimatePresence, motion } from "framer-motion";

function Toast({ message, handleDelete, handleMouseOver, count }) {
  // const [count, setCount] = React.useState(0);
  const messageL = message.slice(0, 3);
  const timeString = moment().startOf(count).fromNow();

  return (
    <div className=" toastLayout">
      {messageL &&
        messageL.map((mesg, index) => {
          return (
            <div
              onMouseOver={() => handleMouseOver()}
              // onMouseOut={() => handleMouseOut()}
              key={index}
              className=" toast"
            >
              <div className=" toastContent">
                <div className="toastTitle">
                  <div className="square"></div>
                  <div
                    style={{ fontWeight: "600", color: "rgb(55,65,81)" }}
                    // className="font-semibold text-gray-700"
                  >
                    Tailwind CSS <span>{count}</span>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      color: "rgb(75,85,99)",
                      marginRight: "0.75rem",
                    }}
                    // className="text-sm text-gray-600"
                  >
                    {timeString}
                  </div>
                  <div
                    style={{ color: "rgb(55,65,71)" }}
                    // className="text-gray-700 "
                  >
                    <ImCross
                      onClick={() => handleDelete(index)}
                      //   className="cursor-pointer"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "0.75rem",
                  color: "rgb(17, 24, 39)",
                  borderTop: "1px solid rgba(128, 130, 133,0.3)",
                }}
                // className="px-3 py-3 text-gray-900"
              >
                {mesg}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Toast;
