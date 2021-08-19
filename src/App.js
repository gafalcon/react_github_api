import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import RepoTitle from "./components/RepoTitle/RepoTitle";
import RepoList from "./components/RepoList/RepoList";
import BranchSelector from "./components/BranchSelector/BranchSelector";
import CommitList from "./components/CommitList/CommitList";
import {
  fetchBranches,
  fetchBranchCommits,
  fetchUserRepositories,
} from "./api";

import { Container, Row, Col } from "react-bootstrap";
function App() {
  const [repo, setRepo] = useState({
    owner: "gafalcon",
    name: "react_github_api",
  });
  const [currentBranch, setCurrentBranch] = useState(null);
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);
  const [repos, setRepos] = useState([]);

  //On repository change, fetch repo branches and set current branch
  useEffect(() => {
    console.log("repo changed!");
    fetchBranches(repo.owner, repo.name).then((branches) => {
      console.log({ branches: branches });
      setBranches(branches);
      //Set initial branch as main or master if exists, else first listed branch
      setCurrentBranch(
        branches.find(
          (branch) => branch.name === "main" || branch.name === "master"
        ) || branches[0]
      );
    });
  }, [repo]);

  //If github user changes, fetch all user repositories
  useEffect(() => {
    console.log("User changed! fetch user repos");
    fetchUserRepositories(repo.owner).then((repos) => {
      console.log({ repos });
      setRepos(repos);
    });
  }, [repo.owner]);

  //When selected branch changes, fetch branch commits
  useEffect(() => {
    console.log("branch changed!");
    console.log(currentBranch);
    if (!currentBranch || !currentBranch.commit.url.includes(repo.name)) return;
    fetchBranchCommits(repo.owner, repo.name, currentBranch.commit.sha).then(
      (commits) => {
        console.log(commits);
        setCommits(commits);
      }
    );
  }, [currentBranch, repo]);

  return (
    <div className="App min-vh-100" style={{ backgroundColor: "#EEEEEE" }}>
      <Header />
      <Container className="mt-4">
        <Row>
          <Col>
            <RepoTitle repo={repo} />
          </Col>
        </Row>
        <Row className="my-4">
          <Col xs="auto">
            <BranchSelector
              branches={branches}
              currentBranch={currentBranch}
              onBranchSelect={setCurrentBranch}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <CommitList commits={commits} />
          </Col>
          <Col>
            <RepoList repos={repos} onRepoSelect={setRepo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
