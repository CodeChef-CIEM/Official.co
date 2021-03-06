import React, { useEffect, useState } from "react";
import bg1 from "../../../images/ZZ74.jpg";
import { useHistory } from "react-router";
import "./style.css";

const PageTwo = () => {
  const history = useHistory();
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 786) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);
  return (
    <div className="page-2-root" id="page-2">
      <img className="page-2-bg" src={bg1} alt="bg" />
      <section id="event-container">
        <div className="page-2-heading-container">
          <h1 className="section-heading mb75px">Events</h1>
          <div
            className="under-line-2"
            style={mobileScreen ? { width: "30%" } : { width: "10%" }}
          ></div>
        </div>

        <div className="timeline">
          <div className="timeline-box" id="timeline-box">
            <h3 id="number-1" className="number">
              01
            </h3>
            <h3 id="name-1" className="name">
              Code Platoon
            </h3>
            <div className="detail-box">
              <p className="details">
                Code Platoon is a Bootcamp program which is organised by
                Calcutta Institute of Engineering and Management and CodeChef
                CIEM Chapter. The following are the dates and important events
                in the Bootcamp Program...
              </p>
              <button
                className="event-details-button-odd"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/events/platoon");
                  // window.open("/events/platoon");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="timeline-box" id="timeline-box">
            <h3 id="number-2" className="number">
              02
            </h3>

            <h3 id="name-2" className="name">
              CodeVita
            </h3>

            <div className="detail-box">
              <p className="details">
                Anonline coding contest, ???CodeVita??? was organized by members of
                the CodeChef CIEM Chapter for the 2nd, 3rd, and 4th-year
                students from all the departments of Calcutta Institute of
                Engineering and Management. It was a 5-day long contest which
                started on the 26th of December, 2020 around 05:00 PM of the
                evening till 05:00 PM of 31st of December, 2020.
              </p>
              <button
                className="event-details-button-even"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://codechef-ciem-chapter.medium.com/codevita-f8f636f5cb1e"
                  );
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="timeline-box">
            <h3 id="number-3" className="number">
              03
            </h3>
            <h3 id="name-3" className="name">
              Intro to Competitive Programming
            </h3>
            <div className="detail-box">
              <p className="details">
                Awebinar on ???Introduction to Competitive Programming??? was
                organized by members of the CodeChef CIEM Chapter on 23rd of
                December 2020, Wednesday around 6 pm for the 2nd, 3rd, and
                4th-year students from all the departments of Calcutta Institute
                of Engineering and Management.
              </p>
              <button
                className="event-details-button-odd"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://codechef-ciem-chapter.medium.com/intro-to-competitive-programming-f3f8f8d03cb0"
                  );
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div id="timeline-divider">
            <div className="timeline-traveller">
              <i className="fas fa-plane"></i>
            </div>
          </div>
        </div>
        <div className="read-more">
          <p>Read More</p>
          <i className="fas fa-arrow-right"></i>
        </div>
      </section>
    </div>
  );
};

export default PageTwo;
