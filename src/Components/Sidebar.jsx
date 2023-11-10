import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo/logo.png";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import {BsFillHouseDoorFill} from "react-icons/fa"
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillMapFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToSearchAction } from "../redusx/action";
import FavoutireList from "./FavouriteList";

const Sidebar = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  return (
    <Navbar bg="primary" data-bs-theme="dark" className="pe-0 mb-0">
      <Container
        fluid
        className="d-flex flex-column justify-content-between  bg-black pb-4"
        id="leftbar"
      >
        <div>
          <div href="#home" className="mt-3 ">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </div>
          <Nav className=" d-flex flex-column">
            <p className="text-secondary mt-5">
              <span className="fs-5 me-2">
                <BsFillHouseDoorFill />
              </span>
              Home
            </p>
            <p className="text-secondary mt-2">
              <span className="fs-5 me-2">
                <BsFillMapFill />
              </span>
              Your Library
            </p>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addToSearchAction(input));
              }}
              className="d-flex align-items-center mt-3"
            >
              <Form.Group
                className=" d-flex align-items-center  "
                controlId="formBasicEmail"
              >
                <Form.Control
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  type="text"
                  className="form-control bg-white text-dark"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="btn btn-outline-secondary btn-sm h-1001 "
                type="submit"
              >
                GO
              </Button>
            </Form>
          </Nav>
        </div>
        <div className="d-flex flex-column justify-content-satrt flex-grow-1 mt-3">

        <FavoutireList />
        </div>
        <div className="d-flex flex-column align-itmes-center">
          <Button variant="third" className=" signup-btn">
            Sign Up
          </Button>

          <Button className="btn login-btn by-3">Login</Button>

          <p className="text-secondary mb-0">Cookie policy / privacy</p>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
