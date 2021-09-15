import React, { useEffect, useState } from "react";
import { Grow } from "@material-ui/core";
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpg";
import { useHistory } from "react-router";
import "./style.css";

const Page3 = () => {
  const history = useHistory();
  const [scrolling, setScrolling] = useState(false);
  const [view, setView] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 786) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  console.log(document);

  const isInViewPort = () => {
    const rect = document.querySelector(".team-0-root").getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  // setInterval(() => {
  //   if (scrolling) {
  //     setScrolling(false);
  //     if (isInViewPort()) {
  //       setView(true);
  //     }
  //   }
  // }, 300);

  document.addEventListener(
    "scroll",
    () => {
      if (history.location.pathname === "/home" && !view) {
        if (isInViewPort()) {
          setView(true);
        }
      }
    },
    { passive: true }
  );

  return (
    <div className="page3-root" id="page-3">
      <div className="page-3-heading">
        <p>TEAMS</p>
        <div
          className="under-line-2"
          style={mobileScreen ? { width: "30%" } : { width: "10%" }}
        ></div>
      </div>

      {/* TEAM 2019-2020 */}

      <div
        className="team-0-root"
        id="team-root"
        style={
          view
            ? { transform: "rotateY(0deg)", opacity: "100%" }
            : { transform: "rotateY(120deg)", opacity: 0 }
        }
        onClick={() => alert("Feature Coming Soon!")}
      >
        <div
          className="team-container"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="page3-read-more">Read More</p>
          <div className="team-text-box">
            <p className="team-heading">Team 2019-2020</p>
            <p className="team-caption">
              We are the former team of the codechef ciem chapter, we organised
              many major events successfully during pur tenure and thus passed
              the mantle to the current team so that they can bring out the
              glory of our aim
            </p>
          </div>
          <div className="image-cover"></div>
          <img className="team-image" src={team1} alt="team-1" />
        </div>
        <p className="team-year">2019-2020</p>
      </div>
      {/* TEAM 2020-2021 */}
      <div
        className="team-1-root"
        id="team-root"
        style={
          view
            ? { transform: "rotateY(0deg)", opacity: "100%" }
            : { transform: "rotateY(120deg)", opacity: 0 }
        }
        onClick={() => alert("Feature Coming Soon!")}
      >
        <div
          className="team-container"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="page3-read-more">Read More</p>
          <div className="team-text-box">
            <p className="team-heading">Team 2020-2021</p>
            <p className="team-caption">
              We are the current team of the chapter, Through various ideas and
              projects we are bringing the aim of the chapter to glory. Stay
              tuned for more events organised by us!
            </p>
          </div>
          <div className="image-cover"></div>
          <img className="team-image" src={team2} alt="team-2" />
        </div>
        <p className="team-year">2020-2021</p>
      </div>
    </div>
  );
};

export default Page3;
