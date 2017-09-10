import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
export default class ShowPost extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',

      title: '',

      blog: ''
    }
  }

  componentDidMount() {

      let blog = this.props.match.params.blog;
      let url = 'https://tiny-lasagna-server.herokuapp.com/collections/blogger/' + blog;
      fetch(url).then(response => response.json()).then(data => this.setState({name: data.name, title: data.title, blog: data.blog}))

    }

render(){
  return (
    <div className = "container">

        <ListGroup fill>

          <ListGroupItem><h2>Title: {this.state.title}</h2></ListGroupItem>
          <ListGroupItem><h3>Author: {this.state.name}</h3></ListGroupItem>
          <ListGroupItem><p>Entry: {this.state.blog}</p></ListGroupItem>
          
        </ListGroup>

    </div>
  )
 }
}
