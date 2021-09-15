import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.png";
import { Divider, IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import "./style.css";
const Appbar = () => {
  const [ismobileScreen, setIsmobileScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth <= 786) {
      setIsmobileScreen(true);
    } else {
      setIsmobileScreen(false);
    }
  }, [ismobileScreen]);

  const jumptoPage = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

  console.log(document.body.style.overflowY);

  const routeTopage = (e, routeName) => {
    e.preventDefault();
    if (history.location.pathname === "/home") {
      document.getElementById(routeName).scrollIntoView();
      if (menuOpen) {
        setMenuOpen((prevState) => !prevState);
        document.body.style.overflowY = "auto";
      }
    } else {
      if (menuOpen) {
        setMenuOpen((prevState) => !prevState);
        document.body.style.overflowY = "auto";
      }
      history.replace("/");
      const reRoute = setInterval(() => {
        document.getElementById(routeName).scrollIntoView();
      }, 500);
      window.onscroll = () => clearInterval(reRoute);
    }
  };

  return (
    <div className="appbar-root">
      <section
        className="mobile-menu"
        id="mobile-menu"
        style={
          menuOpen
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(100%)" }
        }
      >
        <div className="mobile-menu-heading">
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <i
              class="fas fa-times"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></i>
          </IconButton>

          <p className="mobile-menu-text">Menu</p>
        </div>
        <Divider
          style={{ backgroundColor: "white", margin: "0 10%", height: "3px" }}
        />
        <button
          className="navbar-buttons navbar-home mobile-menu-option"
          style={{
            width: "100%",
            textAlign: "left",
            padding: "5%",
            marginTop: "10%",
          }}
          onClick={(e) => {
            e.preventDefault();
            history.replace("/");
          }}
        >
          Home
        </button>
        <button
          className="navbar-buttons navbar-events mobile-menu-option"
          style={{ width: "100%", textAlign: "left", padding: "5%" }}
          onClick={(e) => {
            routeTopage(e, "page-2");
          }}
        >
          Events
        </button>
        <button
          className="navbar-buttons navbar-team mobile-menu-option"
          style={{ width: "100%", textAlign: "left", padding: "5%" }}
          onClick={(e) => {
            routeTopage(e, "page-3");
          }}
        >
          Team
        </button>
        <button
          className="navbar-buttons navbar-contacts mobile-menu-option"
          style={{ width: "100%", textAlign: "left", padding: "5%" }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact-page").scrollIntoView();
          }}
        >
          Contacts
        </button>
      </section>

      <section className="navbar-section">
        <div className="brand-section">
          <div className="brand-section-left">
            <img className="brand-logo" src={logo} alt="brand-logo" />
            &nbsp;
            <p className="page-one-brand-name">CodeChef Ciem Chapter</p>
          </div>
          <div className="brand-section-right">
            <i
              className="fab fa-twitter brand-fab"
              onClick={(e) =>
                jumptoPage(e, "https://twitter.com/CodeChef_CIEM")
              }
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="fab fa-facebook-f brand-fab"
              onClick={(e) =>
                jumptoPage(e, "https://www.facebook.com/codechefciemchapter")
              }
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="fab fa-instagram brand-fab"
              onClick={(e) =>
                jumptoPage(
                  e,
                  "https://www.instagram.com/codechef_ciem_chapter/"
                )
              }
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
        {ismobileScreen ? (
          <div
            className="navbar"
            style={{ alignItems: "flex-end", flexDirection: "column" }}
          >
            {" "}
            <IconButton
              className="hamburger-menu"
              style={{ position: "relative" }}
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <i
                class="fas fa-bars"
                style={{ color: "white", fontSize: "1.5rem" }}
              ></i>
            </IconButton>
          </div>
        ) : (
          <div className="navbar">
            <button
              className="navbar-buttons navbar-home"
              onClick={(e) => {
                e.preventDefault();
                history.replace("/");
              }}
            >
              Home
            </button>
            <button
              className="navbar-buttons navbar-events"
              onClick={(e) => {
                routeTopage(e, "page-2");
              }}
            >
              Events
            </button>
            <button
              className="navbar-buttons navbar-team"
              onClick={(e) => {
                routeTopage(e, "page-3");
              }}
            >
              Team
            </button>
            <button
              className="navbar-buttons navbar-contacts"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-page").scrollIntoView();
              }}
            >
              Contacts
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Appbar;
