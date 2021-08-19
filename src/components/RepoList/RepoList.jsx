import React from "react";

function RepoList({ repos, onRepoSelect }) {
  return (
    <div>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
