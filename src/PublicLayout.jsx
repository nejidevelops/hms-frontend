import React from 'react';
import Navbar from './components/Navbar';

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default PublicLayout;
