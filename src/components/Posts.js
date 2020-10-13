import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
  render(){
    return(
      <div className="left">
        <Post src="https://img2.goodfon.ru/original/3843x2562/4/4a/auto-cars-ac-cobra-cobra.jpg" alt="inst" />
        <Post src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" alt="inst" />
      </div>
    )
  }
}