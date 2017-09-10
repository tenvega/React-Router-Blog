import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap'


import ShowPost from './ShowPost';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(results => {
     return results.json();
    })

    .then(data => {

      this.setState({entries: data});
    });
  }

  render() {

    const newEntry = this.state.entries.map((entry) => {
      return (
      <ListGroup>
        <ListGroupItem><NavLink to={`/blogs/${entry._id}`} key={entry._id}>{entry.title}</NavLink></ListGroupItem>
      </ListGroup>
      )
    });

    return(
      <div className="container">
        <h1>Posts Mas Recientes</h1>

        {newEntry}

      </div>
    )
  }
}
