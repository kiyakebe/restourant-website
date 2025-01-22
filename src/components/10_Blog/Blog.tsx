import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMessage,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

import blog_1 from "../../assets/image/news/news-1.jpg";
import blog_2 from "../../assets/image/news/news-2.jpg";
import blog_3 from "../../assets/image/news/news-3.jpg";

interface BlogProps{
  url: string,
  post_date: string,
  post_title: string,
  post_mark_day: string,
  post_mark_month: string,
}

const BlogCard = ({url, post_date, post_title, post_mark_day, post_mark_month}: BlogProps) => {
  return (
    <div className="blog-card">
      <div className="blog-img-container img-hover">
        <img src={url} alt="" className="blog-cover" />
      </div>
      <div className="blog-body">
        <p className="about-blog">
          <FontAwesomeIcon icon={faUser} className="blog-icon mx-1" /> Admin{" "}
          <FontAwesomeIcon icon={faMessage} className="blog-icon mx-1" />
          {post_date}
        </p>
        <a href="#" className="blog-link">
          <h2 className="larg-font-sm">{ post_title }</h2>
        </a>
        <button className="d-flex align-items-center justify-content-between px-3 py-2 blog-btn">
          <span>READ MORE</span> <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className="date-marker">
          <p className="m-0">{ post_mark_month }</p>
          <h3 className="m-0">{post_mark_day}</h3>
        </div>
      </div>
    </div>
  );
};

interface Props {}

const Blog = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref} className="container-md">
      <h6 className="text-center mb-3">HOEXR HOTEL NEWS</h6>
      <h1 className="larg-font text-center">Latest News Update</h1>

      <div className="devider-md"></div>
      <div className="blog">
        <BlogCard url={blog_1} post_date="October 19, 2022" post_title="Retore Lighting Design in The Hotel" post_mark_day="20" post_mark_month="DEC"/>
        <BlogCard url={blog_2} post_date="October 19, 2022" post_title="Retore Lighting Design in The Hotel" post_mark_day="20" post_mark_month="DEC"/>
        <BlogCard url={blog_3} post_date="October 19, 2022" post_title="Retore Lighting Design in The Hotel" post_mark_day="20" post_mark_month="DEC"/>
      </div>
    </div>
  );
});

export default Blog;
