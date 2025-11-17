// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <span className="whale-icon">🐋</span>
                    <span className="site-name">Unmasked</span>
                </Link>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
            </div>

            <nav className={menuOpen ? 'show' : ''}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/journey" onClick={() => setMenuOpen(false)}>Journey</Link></li>
                    <li><Link to="/ai-assistant" onClick={() => setMenuOpen(false)}>AI Assistant</Link></li>
                    <li><Link to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</Link></li>
                    <li><Link to="/progress" onClick={() => setMenuOpen(false)}>Progress</Link></li>
                </ul>
            </nav>
        </header>
    );
}