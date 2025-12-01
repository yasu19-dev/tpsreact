import React from 'react';

export default function Footer() {
  // Style pour le pied de page
  const footerStyle = {
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px',
    borderTop: '1px solid #ccc'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 ISTA NTIC TANGER ; OFPPT</p>
    </footer>
  );
}