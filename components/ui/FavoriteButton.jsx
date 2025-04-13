'use client';

import { useAuth } from '@/context/AuthProvider';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const FavoriteButton = ({ data }) => {
  const { user, setUser } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(
      user?.watchlist?.some((item) => item.imdbID === data.imdbID) ?? false,
    );
  }, [JSON.stringify(user?.watchlist), data.imdbID]);

  const handleClick = async () => {
    try {
      const res = await fetch('/api/watchlist', {
        method: isFavorite ? 'DELETE' : 'PUT',
        headers: {
          Authorization: user.token,
        },
        body: JSON.stringify(
          isFavorite
            ? { watchlistItemId: data.imdbID }
            : { watchlistItem: data },
        ),
      });

      const resData = await res.json();
      if (!res.ok) throw new Error(resData.msg || 'Something went wrong');

      setUser((prev) => ({
        ...prev,
        watchlist: resData.watchlist,
      }));
      setIsFavorite((prev) => !prev);
    } catch (err) {
      console.error('Error updating watchlist:', err.message);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={handleClick}
      className={`absolute top-2 right-2 z-30 cursor-pointer text-4xl transition-transform hover:scale-110 ${
        isFavorite
          ? 'text-red-600 drop-shadow-[0_0_7px_#dc2626] hover:text-red-200/90'
          : 'text-red-200/90 drop-shadow-[0_0_7px_#dc2626] hover:text-red-600'
      }`}
    />
  );
};

export default FavoriteButton;
