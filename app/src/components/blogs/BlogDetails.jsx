import React from 'react';
import './BlogDetails.scss';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';

const BlogDetails = (props) => {
  const { blog } = props;
  if (blog) {
    return (
      <div className="blogDetailsWrapper">
        <div className="blogTitle">{ blog.title }</div>
        <div className="blogAuthor">Written By { blog.author }</div>
        <div className="blogDate">November 23, 2019</div>
        <hr className="divider"/>
        <div className="blogContent">{ blog.content }</div>
        <hr className="divider"/>
      </div>
    )
  } 

  else {
    return (
      <div className="blogDetailsWrapper">
        <p> Blog is Loading ...</p>
      </div>
    )
  }
  

};

const mapStateToProps =  (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null;
  return {
    blog: blog
  }
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs' }
  ])
)(BlogDetails);