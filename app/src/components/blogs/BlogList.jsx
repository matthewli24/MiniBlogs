import React from 'react';
import './BlogList.scss';
import BlogSummary from './BlogSummary';
import BlogDetails from './BlogDetails';

const BlogList = ({ blogs }) => {
  return (
    <div className="blogListWrapper">
      {blogs && blogs.map(blog => {
        return (
          <BlogSummary blog={blog} key={blog.id}/>
        )
      })}
    </div>
  );
};

export default BlogList;