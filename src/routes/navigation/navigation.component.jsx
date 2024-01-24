import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>

        <div className="linksContainer">
          <Link to={"/shop"}>Shop</Link>
        </div>
        <div className="linksContainer">
          <Link to={"/sign-in"}>Sign-in</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
