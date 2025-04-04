import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TrailerPage = () => {
    location = useLocation();
    const [trailerLink, setTrailerLink] = useState(null);
    const { movieID } = useParams();
    const { movieTitle, movieDescription } = location.state || {};

    const fetchTrailer = (movieID) => {
        const youtube_link = `https://www.youtube.com/embed/${movieID}`
        setTrailerLink(youtube_link)
    }

    useEffect(()=>{
        fetchTrailer(); 
    },[movieID])

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">{movieTitle}</h2>
          <p className="card-text">{movieDescription}</p>

          <div className="ratio ratio-16x9 mt-4">
            {
                trailerLink ? (
                    <iframe
                    src={trailerLink}
                    title={`${movieTitle} Trailer`}
                    allowFullScreen
                  ></iframe>
                ):(
                  <div className="lds-container">
                    <div className="lds-dual-ring"></div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerPage;