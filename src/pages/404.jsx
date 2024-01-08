import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404 not Found</h1>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
};

export default ErrorPage;
