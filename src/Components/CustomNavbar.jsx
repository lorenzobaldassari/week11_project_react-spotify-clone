import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



const CustomNavbar = () => {


  return (
    <Navbar bg="" data-bs-theme="dark" className="d-flex justify-content-center" id="navbar">
        <Container className="w-80">
          <Nav className=" d-flex justify-content-between w-100">
            <Link to="/" className="text-secondary size fw-bold fs-5 fw- nav-link ">
              HOME
            </Link>
            <Link to="/" className="text-secondary size fw-bold fs-5 fw- nav-link ">
              PODCAST
            </Link>
            <Link to="/" className="text-secondary size fw-bold fs-5 fw- nav-link ">
              MOODS SND GENRES
            </Link>
            <Link to="/" className="text-secondary size fw-bold fs-5 fw- nav-link ">
              NEW RELEASES
            </Link>
            <Link to="/" className="text-secondary size fw-bold fs-5 fw- nav-link ">
              DISCOVER
            </Link>

        
          </Nav>
        </Container>
      </Navbar>
  )
};

export default CustomNavbar;
