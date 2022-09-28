import React from "react";
import Flag from "./flag";

function Top() {
  return (
    <div className="top">
      <ul>
        <li>
          <a href="http://localhost:3000/register">REGISTER</a>
        </li>
        <li>
          <a href="http://localhost:3000/login">SIGN IN</a>
        </li>
        <li>
          <a href="http://localhost:3000/faq">HELP and FAQs</a>
        </li>
        <li>
          <button>
            <Flag />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Top;
