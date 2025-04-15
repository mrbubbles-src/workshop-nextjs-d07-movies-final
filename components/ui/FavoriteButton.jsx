'use client';

import { useAuth } from '@/context/AuthProvider';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const FavoriteButton = ({ data }) => {
  const { user, setUser } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsFavorite(
      user?.watchlist?.some((item) => item.imdbID === data.imdbID) ?? false,
    );
  }, [JSON.stringify(user?.watchlist), data.imdbID]);

  const handleFavoriteToggle = async () => {
    if (loading) return;
    if (!user) return router.push('/login');
    setLoading(true);
    try {
      const res = await fetch('/api/watchlist', {
        method: isFavorite ? 'DELETE' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={handleFavoriteToggle}
      className={`absolute top-2 right-2 z-30 cursor-pointer text-4xl transition-all duration-500 ease-in-out hover:scale-110 ${
        isFavorite
          ? 'hover:text-brand-secondary/50 text-brand-primary drop-shadow-[0_0_7px_var(--color-brand-secondary)]'
          : 'text-brand-secondary/50 hover:text-brand-primary drop-shadow-[0_0_7px_var(--color-brand-primary)]'
      }`}
    />
  );
};

export default FavoriteButton;
