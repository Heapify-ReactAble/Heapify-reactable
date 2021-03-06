import React, { useEffect, useState } from "react";
import Logo from "../Assets/Images/Logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { clearLocalData, getLocalData } from "../Utils/LocalStorage";

const PageHeading = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(getLocalData("heapifyUser"));
  }, []);

  const handleLogout = () => {
    clearLocalData();

    history.push("/login");
  };

  return (
    <Navbar className="fixed-top pageHeading text-light">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <img src={Logo} alt="Logo" height="50" width="50" />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <h1>{props.children}</h1>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PageHeading;
