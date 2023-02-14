import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import Login from './Login';

function App() {
  return (
    <div className="Cotainer app-container" role="parent">
      <Row>
        <Col>
          <h1> React Test Tutorial </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Login data-testid="child" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
