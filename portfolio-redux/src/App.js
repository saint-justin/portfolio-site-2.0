import React from 'react';
import './App.scss';
import HomePage from './content/HomePage'

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif&display=swap" rel="stylesheet"></link>
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
