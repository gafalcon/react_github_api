import React from "react";

import { FloatingLabel, Form } from "react-bootstrap";

function BranchSelector({ branches, currentBranch, onBranchSelect }) {
  return (
    <FloatingLabel controlId="floatingSelect" label="Branch">
      <Form.Select
        aria-label="Floating label select example"
        onChange={(e) => onBranchSelect(e.target.value)}
        value={currentBranch}
      >
        {branches.map((branch) => (
          <option key={branch.commit.sha} value={branch}>
            {branch.name}
          </option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
}

export default BranchSelector;
