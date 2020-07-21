import React from "react";
import { Link } from "react-router-dom";

const CompC = (props) => {
  return (
    <div>
      Component C<div>{props.match.params.num}</div>
      <br />
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default CompC;
