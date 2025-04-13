'use client';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteButton = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
    console.log('Add to watchlist clicked!');
  };

  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={handleClick}
      className="text-xl transition-transform hover:scale-110"
    />
  );
};

export default FavoriteButton;
