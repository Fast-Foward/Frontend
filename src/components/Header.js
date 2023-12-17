import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelection } from "./selectionContext";
import logo from "./src/logo.svg";
import "./Header.css";

function Header() {
  const { selectedMenu, setSelectedMenu } = useSelection();
  const location = useLocation();
  const [loggedInUserId, setLoggedInUserId] = useState(
    localStorage.getItem("userId")
  );

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setLoggedInUserId(null);
  };

  return (
    <div className="header">
      <div className="header">
        <div>
          <img className="img" src={logo} alt="" />
        </div>
        <div className="nav">
          <Link to="/" className={location.pathname === "/" ? "select" : ""}>
            <div className="size">측정</div>
          </Link>
          <div className="dash">|</div>
          <Link
            to="/rank"
            className={location.pathname === "/rank" ? "select" : ""}
          >
            <div className="size">순위</div>
          </Link>
          <div className="dash">|</div>
          {loggedInUserId ? (
            <div onClick={handleLogout} className="size">
              로그아웃
            </div>
          ) : (
            <Link
              to="/id"
              className={location.pathname === "/id" ? "select" : ""}
            >
              <div className="size">로그인</div>
            </Link>
          )}
        </div>
        <div className="nav">
          <div
            onClick={() => setSelectedMenu("baseball")}
            className={selectedMenu === "baseball" ? "select size" : "size"}
          >
            야구
          </div>
          <div className="dash">|</div>
          <div
            onClick={() => setSelectedMenu("soccer")}
            className={selectedMenu === "soccer" ? "select size" : "size"}
          >
            축구
          </div>
          <div className="dash">|</div>
          <div
            onClick={() => setSelectedMenu("badminton")}
            className={selectedMenu === "badminton" ? "select size" : "size"}
          >
            배드민턴
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
