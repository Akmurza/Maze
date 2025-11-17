// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Home() {
    const { user } = useUser();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Leave Your Scuba Gear on the Shore</h1>
                    <p className="tagline">Dive into your authentic self without the weight of masking</p>
                    <Link to="/ai-assistant" className="cta-button">
                        Talk to AI Companion 🐋
                    </Link>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="intro-section">
                <div className="container">
                    <h2>Welcome to the Depths</h2>
                    <p className="intro-text">
                        For decades, you've been diving with heavy scuba gear - masks to hide your expressions,
                        tanks to regulate your breath, weights to keep you grounded in a world not designed for you.
                        But what if you could leave all that equipment on the shore?
                    </p>
                    <p className="intro-text">
                        Unmasked is a guide for autistic adults discovering their authentic selves,
                        especially those who received late diagnoses or are just beginning to recognize their neurodivergence.
                    </p>

                    {user.points > 0 && (
                        <div className="welcome-stats">
                            <p>🎯 You have <strong>{user.points} points</strong> and completed <strong>{user.completedTasks.length} tasks</strong>!</p>
                            <Link to="/tasks" className="primary-btn">Continue Your Journey →</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Three Pathways */}
            <section className="pathways-section">
                <div className="container">
                    <h2>Choose Your Path</h2>
                    <div className="pathways-grid">
                        <div className="pathway-card">
                            <div className="pathway-icon">🤖</div>
                            <h3>AI Companion</h3>
                            <p>
                                Talk to a compassionate AI that understands neurodivergence.
                                Get support, strategies, and validation without judgment.
                            </p>
                            <Link to="/ai-assistant" className="pathway-link">Start Chatting →</Link>
                        </div>

                        <div className="pathway-card">
                            <div className="pathway-icon">🎯</div>
                            <h3>Daily Tasks</h3>
                            <p>
                                Small, achievable steps toward unmasking. Earn points, level up,
                                and build confidence in your authentic self.
                            </p>
                            <Link to="/tasks" className="pathway-link">View Tasks →</Link>
                        </div>

                        <div className="pathway-card">
                            <div className="pathway-icon">📊</div>
                            <h3>Track Progress</h3>
                            <p>
                                Visualize your unmasking journey. See how far you've come
                                and celebrate every step forward.
                            </p>
                            <Link to="/progress" className="pathway-link">View Progress →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="quote-section">
                <div className="container">
                    <blockquote>
                        <p>"In the deepest ocean, where light cannot reach, creatures create their own glow.
                            You too can shine in your authentic depths."</p>
                        <cite>— The Abyssal Truth</cite>
                    </blockquote>
                </div>
            </section>
        </div>
    );
}