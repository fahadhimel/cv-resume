import React, { useState } from "react";
import "./Content.css";

const Content = ({ ddata }) => {
  const text = ddata;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <span className="t-text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </span>
  );
};

// const Content = ({ ddata }) => {
//   const textt = ddata;
//   return (
//     <div className="container">
//       <p>
//         <ReadMore>{textt}s</ReadMore>
//       </p>
//     </div>
//   );
// };

export default Content;
