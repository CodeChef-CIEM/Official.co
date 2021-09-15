import React, { useEffect } from "react";
import PageOne from "../Page_1/PageOne";
import PageTwo from "../Page2/PageTwo";
import PageThree from "../page 3/PageThree";
import "./style.css";
import ContactPage from "../Contact Page/ContactPage";
import Page4 from "../Page 4/Page4";

const Home = () => {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <Page4 />
      <PageThree />
      <ContactPage />
    </div>
  );
};

export default Home;
