import React from 'react';
import UseFetch from './UseFetch';

function Psychonauts() {
  const url = 'https://psychonauts-api.herokuapp.com/api/powers';
  const { data, isLoading, error } = UseFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>an error occured</div>;
  }

  return (
    <div>
      {data.map(psychonauts => <p key={psychonauts.name}>{psychonauts.name}</p>)}
    </div>
  );
}

export default Psychonauts;
