import React from "react";

function RepoList({ repos, onRepoSelect }) {
  const repoSelected = (e, repo) => {
    e.preventDefault();
    console.log({ repo_selected: repo });
    onRepoSelect({ owner: repo.owner, name: repo.name });
  };
  return (
    <div>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url} onClick={(e) => repoSelected(e, repo)}>
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
