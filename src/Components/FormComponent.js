import React, { useState } from 'react';

const FormComponent
 = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
    
  };

  return (
    <div className='bank-form'>
      <h1>Bank Form</h1>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Aadhaar Number:
          <input
            type="text"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          PAN Number:
          <input
            type="text"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {showDetails && (
        <div className='bank-details'>
          <h2>Bank Account Details</h2>
          <p>Name: {name}</p>
          <p>Date of Birth: {dob}</p>
          <p>Phone Number : {phoneNumber}</p>
          <p>Address : {address}</p>
          <p>Aadhaar Number : {aadharNumber}</p>
          <p>PAN Number : {panNumber}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;