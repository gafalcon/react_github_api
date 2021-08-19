import Header from "./components/Header/Header";
import RepoTitle from "./components/RepoTitle/RepoTitle";
import RepoList from "./components/RepoList/RepoList";
import BranchSelector from "./components/BranchSelector/BranchSelector";
import CommitList from "./components/CommitList/CommitList";

import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <RepoTitle />
          </Col>
        </Row>
        <Row>
          <Col>
            <BranchSelector />
          </Col>
        </Row>
        <Row>
          <Col>
            <CommitList />
          </Col>
          <Col>
            <RepoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
