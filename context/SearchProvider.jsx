'use client';

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(undefined);
export const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        setLoading,
        searchValue,
        setSearchValue,
        searchResults,
        setSearchResults,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider.');
  }
  return context;
};
