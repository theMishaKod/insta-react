import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User 
          src="https://static8.depositphotos.com/1292351/1059/v/950/depositphotos_10595665-stock-illustration-cartoon-superhero-in-a-classic.jpg" 
          alt="superhero" 
          name="SuperHero" 
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquam recusandae, ab ex harum iste totam dolores sunt suscipit, atque officia modi, perspiciatis qui vel repellendus cumque illum. Minima, pariatur?
        </div>
      </div>
    )
  }
}