import axios from "axios";

const apiUrl = "https://api.github.com";

export const fetchBranches = async (owner, repository) => {
  try {
    const data = (
      await axios.get(`${apiUrl}/repos/${owner}/${repository}/branches`)
    ).data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchBranchCommits = async (owner, repository, branchSha) => {
  try {
    const commits = (
      await axios.get(
        `${apiUrl}/repos/${owner}/${repository}/commits?sha=${branchSha}`
      )
    ).data;
    return commits.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      url: commit.html_url,
      author: {
        name: commit.author?.login || commit.commit.author?.name,
        date: commit.commit.author?.date,
        avatar_url: commit.author?.avatar_url,
        html_url: commit.author?.html_url,
      },
    }));
  } catch (err) {
    console.log(err);
  }
};

export const fetchUserRepositories = async (owner) => {
  const repos = (await axios.get(`${apiUrl}/users/${owner}/repos?sort=updated`))
    .data;
  return repos.map(({ name, full_name, html_url, owner: { login } }) => ({
    name,
    full_name,
    html_url,
    owner: login,
  }));
};
