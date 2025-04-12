'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const SearchContext = createContext(undefined);
export const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    setLoading(true);
    const URL = 'https://www.omdbapi.com/?';
    const API_KEY = '1e3a687b';
    try {
      const res = await fetch(
        `${URL}s=${searchValue.trim()}&apikey=${API_KEY}`,
      );
      const data = await res.json();
      // console.log(data);
      setSearchResults(data.Search || []);
    } catch (err) {
      console.error('Fehler bei der Suche.', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue.trim() < 1) return;
    const timeout = setTimeout(() => {
      fetchSearchResults();
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchValue]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        setLoading,
        searchValue,
        setSearchValue,
        searchResults,
        setSearchResults,
        fetchSearchResults,
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
