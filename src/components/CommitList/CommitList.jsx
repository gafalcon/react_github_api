import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Commit from "../Commit/Commit";

function CommitList({ commits }) {
  return (
    <div>
      <h3>Commits</h3>
      <ListGroup>
        {commits.map((commit) => (
          <ListGroupItem key={commit.sha}>
            <Commit commit={commit} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CommitList;
