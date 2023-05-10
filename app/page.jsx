"use client";

import { useEffect, useState } from "react";

import Courses from "./components/Courses";
import Link from "next/link";
import LoadingPage from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:3000/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome to site</h1>
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
