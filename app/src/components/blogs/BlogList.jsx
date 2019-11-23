import React from 'react';
import './BlogList.scss';
import BlogSummary from './BlogSummary';

const BlogList = () => {
  return (
    <div className="blogListWrapper">
      <BlogSummary />
      <BlogSummary />
      <BlogSummary />
      <BlogSummary />
    </div>
  );
};

export default BlogList;