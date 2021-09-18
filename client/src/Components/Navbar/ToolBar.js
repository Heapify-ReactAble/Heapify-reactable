import React from "react";
import SideMenu from "./sidemenu/SideMenu";
import "./ToolBar.css";
import Logo from "../../Assets/Images/Logo.png";
import Btn from "../Btn";
import { useHistory } from "react-router-dom";
import { checkAuth } from "../../Utils/checkAuth";

const Toolbar = (props) => {
  const history = useHistory();

  return (
    <header className="toolbar">
      <nav className="toolbar_navigator">
        <div />
        <div className="toolbar_logo">
          <div onClick={() => history.push("/home")}>
            <img src={Logo} alt="Logo" height="50" width="50" />
          </div>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <div>About</div>
            </li>
            <li>
              <div>Features</div>
            </li>
            <li>
              <div>Programs</div>
            </li>
            <li>
              <div>Contact Us</div>
            </li>
            <li>
              {!checkAuth() ? (
                <Btn title="Login" onClick={() => history.push("/login")} />
              ) : (
                <Btn
                  title="Resources"
                  onClick={() => history.push("/dashboard")}
                />
              )}
            </li>{" "}
          </ul>
        </div>
        <div className="toggle-btn">
          <SideMenu click={props.drawerToggleClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
