import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Baselayout extends Component{
//   constructor(props){
//     super(prop);
//   }
// }

render(){
  return (<body>
       <div className="container-fluid">
       <div className="row justify-content-center">
       <nav>
       <ul>
        <li>
        <NavLink  activeClassName="selected" exact to="/">Home</NavLink>
        </li>
        <li>
        <NavLink  activeClassName="selected" to="/create">New Post</NavLink>
        </li>
        <li>
        <NavLink  activeClassName="selected" to="/blogs">Posts</NavLink>
        </li>
        </ul>
        </nav>
       </div>


        {this.props.children}

      </div>
      </body>

  )
}
}
