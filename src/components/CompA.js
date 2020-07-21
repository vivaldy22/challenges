import React from "react";
import { Link } from "react-router-dom";

const CompA = (props) => {
  return (
    <div>
      CompA
      <br />
      <Link to={{ pathname: "/compB", state: { from: "CompA" } }}>
        To Component B
      </Link>
      <Link to={"/compC/1"}>To Component C</Link>
    </div>
  );
};

export default CompA;
