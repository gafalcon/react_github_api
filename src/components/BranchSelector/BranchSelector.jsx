import React from "react";

import { FloatingLabel, Form } from "react-bootstrap";

function BranchSelector({ branches, currentBranch, onBranchSelect }) {
  const branchChange = (e) => {
    onBranchSelect(branches[parseInt(e.target.value)]); //update curent branch
  };
  return (
    <FloatingLabel controlId="floatingSelect" label="Branch">
      <Form.Select
        aria-label="Floating label select example"
        onChange={branchChange}
        value={branches.indexOf(currentBranch) || ""}
      >
        {branches.map((branch, i) => (
          <option key={branch.commit.sha} value={i}>
            {branch.name}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
}

export default BranchSelector;
