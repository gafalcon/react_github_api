import React from "react";

function RepoTitle({ repo }) {
  return (
    <div>
      <h1>
        <a href={`https://github.com/${repo.owner}`}> {repo.owner}</a>/
        <a href={`https://github.com/${repo.owner}/${repo.name}`}>
          {repo.name}
        </a>
      </h1>
    </div>
  );
}

export default RepoTitle;
