import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css'; // Asegúrate de crear y usar este archivo CSS

const DetailsPage = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://dattebayo-api.onrender.com/characters/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details-container'>
      <h1 className='titulo'>{data.name}</h1>
      {data.images && data.images.length > 0 && (
        <div className='carousel-container'>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {data.images.map((image, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={image} className="d-block w-100 carousel-image" alt={data.name} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )}
      <div className='character-details'>

        <div className='details-row'>
          
        </div>
        {/* Agrega más detalles del personaje aquí */}
      </div>
    </div>
  );
}

export default DetailsPage;
