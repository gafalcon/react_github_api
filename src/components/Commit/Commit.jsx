import React from "react";

function Commit({ commit }) {
  return (
    <div>
      <h4>
        <a href={commit.url}>{commit.message}</a>
      </h4>
      <p>
        <a href={commit.author.html_url}>{commit.author.name}</a>
        <span> commited {commit.author.date}</span>
      </p>
    </div>
  );
}

export default Commit;
