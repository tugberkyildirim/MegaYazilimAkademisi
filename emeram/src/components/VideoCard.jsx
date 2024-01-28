import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function VideoCard({id,youtubeID, text }) {
    if (!youtubeID || !text) {
      return null;
    }
    return (
      <Link to={`/egitimler/${id}`} className='text-decoration-none'>
      <div className="card border-0 p-1">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <iframe
              className="video"
              title="Youtube player"
              src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
              allowFullScreen={true}
            ></iframe>
          </div>
          <p className="card-title pb-2 text-truncate w-100">{text}</p>
        </div>
      </div>
      </Link>
    );
  }
  
  VideoCard.propTypes = {
    youtubeID: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };