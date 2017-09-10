import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
export default class CreatePost extends Component{
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBlogChange = this.handleBlogChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',

      title: '',

      blog: ''

    }

  }

    handleNameChange = (event) => {
      this.setState({name: event.target.value});
    };

    handleTitleChange = (event) => {
      this.setState({title: event.target.value});
    };

    handleBlogChange = (event) => {
      this.setState({blog: event.target.value});
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let newEntry = JSON.stringify(this.state);


      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
        method: "POST",
        body: newEntry,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      .then(response => this.props.history.push('/'));
       this.setState({name:'', title:'', blog:''});

    }


render(){
  return ( <div>
    <h1> Create!</h1>

    <form onSubmit={this.handleSubmit} className="container">
        <div className="form_author">
          <label>Author:</label>
          <input className="form-control" name="name" type="text" value={this.state.name}onChange={this.handleNameChange} />
        </div>

        <div className="form-title">
          <label>Title:</label>
          <input className="form-control" name="title" type="text" value={this.state.title}onChange={this.handleTitleChange} />
        </div>

        <div className="form-blog">
          <label>New Entry!:</label>
          <textarea className="form-control" rows="10" name="blog" type="text" value={this.state.blog}onChange={this.handleBlogChange} />
        </div>

        <button type="submit" className="btn btn-primary" href="/">Submit</button>
      </form>
        </div>

  )
}
}
