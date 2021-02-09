import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">

     <Navbar />
      <Banner />
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movis" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Trending" fetchUrl={requests.fetchTrending} /> 
     <Row title="Horror Moview" fetchUrl={requests.fetchHorrorMovies} /> 
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 

    </div>
  );
}

export default App;
