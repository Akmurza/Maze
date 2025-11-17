import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <span className="whale-icon">🐋</span>
                    <span>Unmasked</span>
                </div>

                <nav className="footer-nav">
                    <Link to="/">Home</Link>
                    <Link to="/journey">Journey</Link>
                    <Link to="/ai-assistant">AI Assistant</Link>
                    <Link to="/tasks">Tasks</Link>
                    <Link to="/progress">Progress</Link>
                </nav>

                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} Unmasked | Your Safe Space</p>
                    <p>Built with 💙 for the autistic community</p>
                </div>
            </div>
        </footer>
    );
}