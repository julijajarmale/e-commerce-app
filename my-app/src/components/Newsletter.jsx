import React from "react";
import SendIcon from "@mui/icons-material/Send";

function Newsletter() {
  return (
    <div className="news-container">
      <h1 className="title">Newsletter</h1>
      <div className="desc">
        Would you like to receive a 15% discount?* Get news by email by post
        Subscribe to email newsletters by mail from Shopit!
      </div>
      <div className="input-container">
        <input type="email" placeholder="Your email!"></input>
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
