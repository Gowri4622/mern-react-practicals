import React from 'react';

const DataComponent = (props) => {
  const queryParams = new URLSearchParams(props.location.search);
  const name = queryParams.get('name');
  const email = queryParams.get('email');

  return (
    <div>
      <h1>Details</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default DataComponent;