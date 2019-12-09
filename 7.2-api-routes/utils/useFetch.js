import React, { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        debugger
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { data, error };
};

export default useFetch