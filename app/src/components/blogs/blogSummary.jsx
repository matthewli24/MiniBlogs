import React from 'react';
import './BlogSummary.scss'

const BlogSummary = () => {
  return (
    <div className="blogItem">
        <span className="blogTitle">Blog Title</span>
        <p className="blogAuthor">By MattMatt</p>
        <p className="blogSummary">Hello Here is A test blog.</p>
        <p className="blogDate">November 21, 2019</p>
    </div>
  );
};

export default BlogSummary;