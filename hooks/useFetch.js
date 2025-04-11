'use client';

import { useEffect, useState } from 'react';

export function useFetch(searchType, searchValue) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchType || !searchValue) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const URL = 'https://www.omdbapi.com/?';
      const API_KEY = '1e3a687b';
      try {
        const res = await fetch(
          `${URL}${searchType}=${searchValue}&apikey=${API_KEY}`,
          { signal: controller.signal },
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [searchType, searchValue]);

  return { data, loading, error };
}
