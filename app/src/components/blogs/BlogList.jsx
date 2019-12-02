import React from 'react';
import './BlogList.scss';
import BlogSummary from './BlogSummary';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blogListWrapper">
      {blogs && blogs.map(blog => {
        return (
          <Link className="blogDetailsLink" key={blog.id} to={'/blog/' + blog.id}>
            <BlogSummary blog={blog} key={blog.id}/>
          </Link>   
        )
      })}
    </div>
  );
};

export default BlogList;