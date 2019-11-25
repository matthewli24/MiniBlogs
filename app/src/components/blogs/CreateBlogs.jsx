import React, { Component } from 'react';
import './CreateBlogs.scss';

class CreateBlog extends Component {
  state = {
    title: '',
    content: '',
    characterCount: 999
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title, this.state.content);
  };

  render() {
    
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

export default CreateBlog;