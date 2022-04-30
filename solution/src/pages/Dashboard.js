import React from "react";
import BlogCard from "../components/BlogCard";
// import "./Dashboard.css";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";


const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { blogList, isLoading } = BlogFetch();

  return (
    <div>
     
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          // margin: "3rem",
          justifyContent: "center",
        }}
      >
            {blogList?.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
         
        
      </div>
    </div>
  );
};

export default Dashboard;
