import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page" style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>XETA: 404 Not Found</h1>
      <p>OOOOPPPS!!!!!Səhifə mövcud deyil</p>
      <img src="https://almantatiana.ru/wp-content/uploads/2024/03/custom-404.jpg" alt="404 Error" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}/>
      <p>GO TO HOMEPAGE?</p>
      <Link to="/">YES</Link>
    </div>
  );
}

export default ErrorPage;