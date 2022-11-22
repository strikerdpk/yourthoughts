import React from "react";
import { useState } from "react";

import Seed from "./Seed";

// handleUpVote() {
//   console.log(' was upvoted.');
// };

//let votes = props.votes;

function Product(props) {
  let [votes, setVotes] = useState(props.votes); // use state to update the vote count

  function updateVotes() {
    setVotes(votes + 1);
    console.log("updatevotes=" + setVotes);
  }
  return (
    <div className="item">
      <div className="image">
        {" "}
        <img src={props.productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={updateVotes}>
            <i className="large caret up icon" />
          </a>
          {votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={props.submitterAvatarUrl} />
        </div>
      </div>
    </div>
  );
}

export default Product;
