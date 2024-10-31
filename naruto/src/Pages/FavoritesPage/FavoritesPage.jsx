import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'; // Asegúrate de importar getDocs
import CustomCard from '../../Components/CustomCard/CustomCard';
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'favorites'));
        const favoritesList = querySnapshot.docs.map(doc => doc.data());
        setFavorites(favoritesList);
      } catch (e) {
        console.error('Error fetching favorites: ', e);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((favorite, index) => (
        <div key={index}>
          <CustomCard img={favorite.image} name={favorite.name} />  
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;