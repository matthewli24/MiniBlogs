import React, { Component } from 'react';
import './CreateBlogs.scss';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/blogActions';



class CreateBlog extends Component {
  state = {
    title: '',
    content: '',
    characterCount: 0
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    if (e.target.id === "content") {
      this.setState({
        characterCount: e.target.value.length
      })
    }
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    let blog = {title: this.state.title, content: this.state.content};
    this.props.createBlog(blog);
    this.props.history.push('/');
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="CreateBlogWrapper">
        <form className="createBlogForm" onSubmit={this.handleOnSubmit}>
          <h1 className="createBlogTitle">Create A New Blog</h1>
          <div className="inputField">
            <label className="blogTitleLabel" htmlFor="title">Title</label>
            <input className="blogTitleInput" 
                   type="text" 
                   id="title" 
                   onChange={this.handleOnChange}>
            </input>
          </div>
          <div className="inputField">
            <label className="blogContentLabel" htmlFor="content">Blog Content</label>
            <textarea className="blogContent" 
                      id="content"
                      required
                      maxLength={1000}
                      placeholder="Share Something Awesome!" 
                      onChange={this.handleOnChange}>       
            </textarea>
            <div className="characterCountContainer">
              <div className="counter">{this.state.characterCount}</div>
            </div>
          </div>
          <div className="inputField">
            <div className="buttonContainer">
              <button className="createBlogButton">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);