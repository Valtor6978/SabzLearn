import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

import "./LastCourse.css";

export default function LastCourse() {
  return (
    <div class="courses">
      <div class="container">
        <SectionHeader
          title={"جدید ترین دوره ها"}
          desc={"سکوی پرتاپ شما به سمت موفقیت"}
          btnTitle={"تمامی دوره ها"}
        />
      </div>

      <div class="courses-content">
        <div class="container">
          <div class="row">
            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />
          </div>
        </div>
      </div>
    </div>
  );
}
