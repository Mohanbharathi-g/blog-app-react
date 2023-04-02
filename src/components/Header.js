import React from "react";
import { Link } from "react-router-dom";
// import { transitions } from "bootstrap";
import { MdOutlineLogout } from "react-icons/md";
import { HiLogin } from "react-icons/hi";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-expand-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link fw-semibold ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link fw-semibold ${
                      active === "blogs" ? "active" : ""
                    }`}
                    onClick={() => setActive("blogs")}
                  >
                    Blogs
                  </li>
                </Link>

                <Link to="/create" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link fw-semibold ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}
                  >
                    Create
                  </li>
                </Link>

                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link fw-semibold ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    About
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1680174784/avatar_pbxti9.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user?.displayName}
                      </p>
                      <li
                        className="nav-item nav-link fw-bold"
                        onClick={handleLogout}
                      >
                        Logout
                        <MdOutlineLogout
                          style={{
                            marginLeft: "5px",
                          }}
                        />
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        } fw-bold`}
                        onClick={() => setActive("login")}
                      >
                        Login <HiLogin />
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;