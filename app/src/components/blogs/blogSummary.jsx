import React from 'react';
import './BlogSummary.scss'

import moment from 'moment';

const BlogSummary = ({ blog }) => {
  return (
    <div className="blogItem">
        <span className="blogTitle">{blog.title}</span>
        <p className="blogAuthor">By {blog.author}</p>
        {/* <p className="blogSummary">Hello Here is A test blog.</p> */}
        <p className="blogDate">{ moment(blog.createdAt.toDate()).calendar() }</p>
    </div>
  );
};

export default BlogSummary;