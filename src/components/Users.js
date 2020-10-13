import React, {Component} from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User 
          src="https://static8.depositphotos.com/1292351/1059/v/950/depositphotos_10595665-stock-illustration-cartoon-superhero-in-a-classic.jpg" 
          alt="superhero" 
          name="SuperHero" />
        <div className="users__block">
        <User 
          src="https://static8.depositphotos.com/1292351/1059/v/950/depositphotos_10595665-stock-illustration-cartoon-superhero-in-a-classic.jpg" 
          alt="superhero" 
          name="SuperHero" 
          min />
        <User 
          src="https://static8.depositphotos.com/1292351/1059/v/950/depositphotos_10595665-stock-illustration-cartoon-superhero-in-a-classic.jpg" 
          alt="superhero" 
          name="SuperHero" 
          min />
        <User 
          src="https://static8.depositphotos.com/1292351/1059/v/950/depositphotos_10595665-stock-illustration-cartoon-superhero-in-a-classic.jpg" 
          alt="superhero" 
          name="SuperHero" 
          min />
        <User 
          src="https://static8.depositphotos.com/1292351/1059/v/950/depositphotos_10595665-stock-illustration-cartoon-superhero-in-a-classic.jpg" 
          alt="superhero" 
          name="SuperHero" 
          min />
        </div>
    </div>
  )
}