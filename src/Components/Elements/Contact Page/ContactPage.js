import { Divider, Grid } from "@material-ui/core";
import React from "react";
import emailjs from "emailjs-com";
import "./style.css";

const ContactPage = () => {
  const serviceID = `HIDDEN SOURCE`;
  const templateID = `HIDDEN SOURCE`;
  const userID = `HIDDEN SOURCE`;

  console.log(serviceID);

  const sendEmail = (e) => {
    e.preverntDefault();
    console.log(e.target);
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(() => alert("Message Sent!"))
      .catch((err) => console.log(err.message));
    e.target.reset();
  };

  return (
    <div className="contact-page-root" id="contact-page">
      <div className="contact-blur">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ padding: "2%", display: "flex", alignItems: "center" }}
          >
            <div className="contact-left">
              <p className="contact-title">Get in Touch</p>
              <div className="under-line"></div>
              <p className="contact-short-text">
                For any queries, doubts, help or problems faced regarding any
                issue, events, contests, workshops, etc our contact details are
                given below or you can get in touch with us.
              </p>
              <p className="contact-title">Details</p>
              <div className="under-line-2"></div>
              <p className="contact-text">ciem.codechef@gmail.com</p>
              <div className="contact-social-media-holder">
                <div className="contact-social-media-sub-holder">
                  <i className="fab fa-twitter footer-icon"></i>
                  <p className="contact-text-sm" style={{ marginLeft: "5px" }}>
                    CodeChef-CIEM
                  </p>
                </div>
                <div className="contact-social-media-sub-holder">
                  <i className="fab fa-facebook-f footer-icon"></i>
                  <p className="contact-text-sm" style={{ marginLeft: "5px" }}>
                    CodeChef-CIEM-Chapter
                  </p>
                </div>
                <div className="contact-social-media-sub-holder">
                  <i className="fab fa-instagram footer-icon"></i>
                  <p className="contact-text-sm" style={{ marginLeft: "5px" }}>
                    CodeChef-CIEM-Chapter
                  </p>
                </div>
                <p className="contact-text">
                  Calcutta Institute of Engineering and Management 24/1A, Chandi
                  Ghosh Road Kolkata - 700040
                </p>
              </div>
            </div>
            <Divider
              orientation="vertical"
              style={{ backgroundColor: "white", height: "50%", width: "3px" }}
            />
          </Grid>

          <Grid xs={12} sm={6} style={{ paddingTop: "2%" }}>
            <div
              className="contact-right"
              style={{ marginLeft: "5%", position: "relative" }}
            >
              <p className="contact-title">Send a message</p>
              <div className="under-line"></div>
              <div className="box-containers">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    emailjs
                      .sendForm(serviceID, templateID, e.target, userID)
                      .then(() => alert("Message Sent!"))
                      .catch((err) => console.log(err.message));
                    e.target.reset();
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <input
                    name="user_name"
                    className="text-box"
                    placeholder="Name"
                  />
                  <input
                    name="user_email"
                    className="text-box"
                    placeholder="Email"
                  />
                  <textarea
                    name="message"
                    className="message-box"
                    placeholder="Message"
                  />
                  <button className="contact-send-button" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="water-mark">
                <p className="watermark-text">Developed By</p>
                <p className="watermark-text">Hrishikesh Ghosh And,</p>
                <p className="watermark-text">Debarghya Dutta</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactPage;
