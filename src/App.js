import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import RepoTitle from "./components/RepoTitle/RepoTitle";
import RepoList from "./components/RepoList/RepoList";
import BranchSelector from "./components/BranchSelector/BranchSelector";
import CommitList from "./components/CommitList/CommitList";

import { Container, Row, Col } from "react-bootstrap";
function App() {
  const [repo, setRepo] = useState({
    owner: "gafalcon",
    name: "react_github_api",
  });
  const [currentBranch, setCurrentBranch] = useState("main");
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setCurrentBranch("main");
    setBranches(["main", "develop"]);
    setCommits([
      {
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
        url: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        author: {
          name: "gafalcon",
          date: "2011-04-14T16:00:49Z",
          avatar_url: "https://github.com/images/error/octocat_happy.gif",
        },
        message: "Fix all the bugs",
      },

      {
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5f",
        url: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        author: {
          name: "gafalcon",
          date: "2011-04-14T16:00:49Z",
          avatar_url: "https://github.com/images/error/octocat_happy.gif",
        },
        message: "Fix all the bugs 1",
      },
      {
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5g",
        url: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        author: {
          name: "gafalcon",
          date: "2011-04-14T16:00:49Z",
          avatar_url: "https://github.com/images/error/octocat_happy.gif",
        },
        message: "Fix all the bugs 2",
      },
      {
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5h",
        url: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        author: {
          name: "gafalcon",
          date: "2011-04-14T16:00:49Z",
          avatar_url: "https://github.com/images/error/octocat_happy.gif",
        },
        message: "Fix all the bugs 3",
      },
    ]);
    setRepos([
      { name: "repo1" },
      { name: "repo2" },
      { name: "repo3" },
      { name: "repo4" },
    ]);
  }, [repo]);

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
