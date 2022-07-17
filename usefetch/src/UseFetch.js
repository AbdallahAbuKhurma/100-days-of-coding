import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function UseFetch(url) {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      if(data) {
        setFetchedData({
          data: data.results ? data.results : data,
          isLoading: false,
          error: false
        });
      }
    } catch (error) {
      if(axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log('error occured', error);
      }
      setFetchedData({
        data: [],
        isLoading: false,
        error: true
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  const { data, isLoading, error } = fetchedData;
  return { data, isLoading, error };
}

export default UseFetch;