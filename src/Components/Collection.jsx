import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
const Collection = () => {
  return (
    <div className="collection container">
      <h2 className="title pirate-one">Confira as coleções Street</h2>
      <div className="collection-row">
        <Link to="/produtos/memories">
          {" "}
          <div className="memorie">
            {" "}
            <h1>Memories</h1>{" "}
          </div>
        </Link>
        <Link to="/produtos/washed">
          <div className="washed">
            {" "}
            <h1>Washed</h1>{" "}
          </div>
        </Link>
        <Link to="/produtos/hood">
          <div className="hood">
            {" "}
            <h1>Hood</h1>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
