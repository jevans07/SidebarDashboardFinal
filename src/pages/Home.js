import React from 'react';
import Picture from '../components/picture';

const Home = () => {
  return (
    <div className='home'>
      <header className='home-header'>
        <h1>Antimicrobial Resistance Homepage</h1>
      </header>
      <main className='home-content'>
        <p>This is where we will be able to give a brief overview of what the website is about and can direct our users 
            to other links where they will be able to gain the information they are searching for.
        </p>
      </main>
      <Picture />
    </div>
  );
}

export default Home;
