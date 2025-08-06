import React from 'react';
import './news.css';

function News() {
  return (
    <div>
      <form action="/" method="post">
        <h3 className='text'>SIGN UP FOR OUR DAILY INSIDER</h3>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
        />
        <button className='btn' type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default News;
