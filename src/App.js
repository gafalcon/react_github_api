import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import RepoTitle from "./components/RepoTitle/RepoTitle";
import RepoList from "./components/RepoList/RepoList";
import BranchSelector from "./components/BranchSelector/BranchSelector";
import CommitList from "./components/CommitList/CommitList";
import { fetchBranches, fetchBranchCommits } from "./api";

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

  useEffect(() => {
    console.log("repo changed!");
    fetchBranches(repo.owner, repo.name).then((res) => {
      console.log({ branches: res });
      setBranches(res);
      setCurrentBranch(res[0]);
    });
    setRepos([
      { name: "repo1" },
      { name: "repo2" },
      { name: "repo3" },
      { name: "repo4" },
    ]);
  }, [repo]);

  useEffect(() => {
    if (!currentBranch) return;
    console.log("branch changed!", currentBranch.name);
    fetchBranchCommits(repo.owner, repo.name, currentBranch.commit.sha).then(
      (commits) => {
        console.log(commits);
        setCommits(commits);
      }
    );
  }, [currentBranch]);

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
          <Col xs={10}>
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
