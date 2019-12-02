import React from 'react';
import './BlogSummary.scss'

const BlogSummary = ({ blog }) => {
  return (
    <div className="blogItem">
        <span className="blogTitle">{blog.title}</span>
        <p className="blogAuthor">By {blog.author}</p>
        <p className="blogSummary">Hello Here is A test blog.</p>
        <p className="blogDate">November 21, 2019</p>
    </div>
  );
};

export default BlogSummary;