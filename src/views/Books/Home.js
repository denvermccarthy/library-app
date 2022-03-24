import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Welcome to Dangalf`s Library of Computer Science!</h2>
      <h3>
        Check out the amazing selection of books in our <Link to={'/book'}>catalog.</Link>
      </h3>
    </div>
  );
}
