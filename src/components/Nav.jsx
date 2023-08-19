import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        margin: "0",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontWeight: "bold",

          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Link
        to="/all"
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontWeight: "bold",

          textDecoration: "none",
        }}
      >
        All Pokemon
      </Link>
    </div>
  );
}

export default Nav;
