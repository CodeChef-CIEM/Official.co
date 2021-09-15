import React from "react";
import { useHistory } from "react-router";
import element1 from "../../../images/event-page-element1.jpg";
import element2 from "../../../images/event-page-element2.jpg";
import Appbar from "../Appbar/Appbar";
import "./style.css";
import ContactPage from "../Contact Page/ContactPage";
import "./style.css";

const CodePlatoon = () => {
  const history = useHistory();
  console.log(history.location);
  return (
    <div className="event-root">
      <section className="event-heading">
        <div className="event-appbar-section">
          <Appbar />
        </div>
        <div className="event-title-box">
          <p className="event-title-top">Code</p>
          <p className="event-title-bottom">Platoon</p>
        </div>
        <div className="event-sub-title-box">
          <p className="event-sub-title-date">19 Aug, 2021</p>
          <p className="event-sub-title-destination">
            Calcutta Institute of Engineering and Management
          </p>
          <button
            className="event-sub-title-register-button"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/8f39RdLjpkkYAXaY6");
            }}
          >
            Register
          </button>
        </div>
      </section>
      <section className="event-body">
        <div className="about-event-box">
          <p className="about-event">About Event</p>
          <p className="about-event-text">
            Code Platoon is a Bootcamp program which is organised by Calcutta
            Institute of Engineering and Management and CodeChef CIEM Chapter.
            The following are the dates and important events in the Bootcamp
            Program:
          </p>
          <div className="element-box-1">
            <div className="notice-box">
              <p className="notice-title">Notice!</p>
              <p className="content-2">
                1. Registration forms will be available on our website from 15th
                September 2021 and forms will be closing on 18th September 2021.
              </p>

              <p className="content-2">
                2. Participants will be given a mentor on 19th of September and
                Mentors will be introducing themselves.
              </p>

              <p className="content-2">
                3. Participants will be mentored accordingly from 20th to 21st
                September.
              </p>

              <p className="content-2">
                4.From 22nd to 25th September the participants will be
                practicing on their own and any help required will be provided
                by the Mentors.
              </p>

              <p className="content-2">
                5. On the closing day of this event i.e 26th of September a
                Contest will be held on the CodeChef platform.
              </p>
            </div>
            <img className="platoon-element" src={element1} alt="element" />
          </div>
          <div className="element-box-2">
            <img className="platoon-element-2" src={element2} alt="element" />
            <div className="notice-box">
              <p className="notice-title">Rules!</p>
              <p className="content-2">
                1. Any kinds of Plagarism will not be tolerated.
              </p>

              <p className="content-2">
                2. Certificates of Participation will be handed out to the
                Participants.
              </p>

              <p className="content-2">
                3.Certificates of Mentoring will be given to Mentors.
              </p>

              <p className="content-2">
                4.Certificates for top performers will be provided as well.
              </p>

              <p className="content-2">
                5. Ranks in the contest will be scorebased.
              </p>

              <p className="content-2">6. For more details contact us.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="event-footer">
        <ContactPage />
      </section>
    </div>
  );
};

export default CodePlatoon;
