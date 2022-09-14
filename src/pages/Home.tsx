import React from "react";
import Footer from "../components/Footer";
import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

const Home: React.FC = () => {
  return (
    <div className="dark:bg-gray-200 ">
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;
