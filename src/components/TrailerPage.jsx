import React from 'react';
import BackButton from './BackButton';
import { useLocation, useParams } from 'react-router-dom';

const TrailerPage = () => {
    const location = useLocation();
    const { movieID } = useParams();
    const { movieTitle, movieDescription } = location.state || {};

  return (
    <div className="container">
      <div className='container my-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <BackButton />
      </div>
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title">{movieTitle}</h2>
          <p className="card-text">{movieDescription}</p>

          <div className="ratio ratio-16x9 mt-4">
            {
                movieID ? (
                    <iframe
                    src={`https://www.youtube.com/embed/${movieID}`}
                    title={`${movieTitle} Trailer`}
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