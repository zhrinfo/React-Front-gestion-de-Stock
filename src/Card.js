import React from 'react';

const Card = () => {
  const cardStyle = {
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '20px auto',
  };

  const titleStyle = {
    fontSize: '20px',
    color: '#333',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Simple Card</h2>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
};

export default Card;
