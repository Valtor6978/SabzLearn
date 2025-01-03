import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Header from "../../Components/Header/Header";
import LastCourses from "../../Components/LastCourses/LastCourses";

import "./Index.css";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
    </>
  );
}
