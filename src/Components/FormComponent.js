import React, { useState } from 'react';

const FormComponent = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [balance, setBalance] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <div>
      <h1>Bank Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Account Holder:
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
          />
        </label>
        <br />
        <label>
          Balance:
          <input
            type="text"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {showDetails && (
        <div>
          <h2>Bank Account Details</h2>
          <p>Account Number: {accountNumber}</p>
          <p>Account Holder: {accountHolder}</p>
          <p>Balance: {balance}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;