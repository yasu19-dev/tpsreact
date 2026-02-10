import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <nav className="header">
            <Link to="/">Liste des employes</Link>
            <Link to="/add">Ajouter un employe</Link>
        </nav>
    );
}