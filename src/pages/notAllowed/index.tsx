import React from 'react';
import { Link } from 'react-router-dom';

function NotAllowed() {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>Access denied</h1>
      <p>You don't have permission to view this page.</p>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
}

export default NotAllowed;
