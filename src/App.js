import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./personal Css/personal scss/personal.css";
import CustomNavbar from "./Components/CustomNavbar";
import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection";
import Soundbar from "./Components/Soundbar";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import FetchComponent from "./Components/fetchComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container fluid className="ms-0 ps-0 background-zero">
          <Row className="">
            <Col className="col-2 pe-0" id="sidebar">
              <Sidebar />
            </Col>

            <Col
              className="col-12 col-lg-10 ps-0 mainPage position-relative  "
              id="mainsection"
            >
              <CustomNavbar />
              <MainSection />
            </Col>
          </Row>
        </Container>
        <div className="footer">
          <Soundbar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
