import { useUser } from '../context/UserContext';

export default function Journey() {
    return (
        <div className="journey-page">
            <section className="page-header">
                <h1>Your Unmasking Journey</h1>
                <p className="subtitle">Removing the gear, one piece at a time</p>
            </section>

            <section className="content-section">
                <div className="container">
                    <h2>Late Diagnosis: The Heavy Gear</h2>
                    <p className="lead">
                        You've been diving with full scuba equipment for years, maybe decades.
                        The mask fogged your vision. The regulator controlled every breath.
                        And you thought everyone dived this way.
                    </p>

                    <div className="info-grid">
                        <div className="info-card">
                            <h3>The Discovery</h3>
                            <p>
                                Many autistic adults don't receive diagnosis until their 30s, 40s, or later.
                                The revelation that you've been "wearing gear" your whole life can be
                                simultaneously liberating and devastating.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3>The Grief</h3>
                            <p>
                                It's okay to grieve. Grieve the childhood you didn't understand.
                                Grieve the energy you spent trying to breathe through a regulator.
                                Grieve the authentic self you couldn't show.
                            </p>
                        </div>

                        <div className="info-card">
                            <h3>The Relief</h3>
                            <p>
                                But there's also relief. Finally understanding why the gear felt so heavy.
                                Why everyone else seemed to dive effortlessly. Why you were always so exhausted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark-section">
                <div className="container">
                    <h2>Understanding Masking</h2>
                    <p className="lead">
                        Masking is your scuba gear. It's the collection of behaviors you learned
                        to appear neurotypical:
                    </p>

                    <div className="masking-examples">
                        <div className="masking-item">
                            <span className="icon">😐</span>
                            <h4>Facial Expression Control</h4>
                            <p>Manually adjusting your face to match social expectations</p>
                        </div>

                        <div className="masking-item">
                            <span className="icon">👀</span>
                            <h4>Forced Eye Contact</h4>
                            <p>Staring at faces when you'd rather look away</p>
                        </div>

                        <div className="masking-item">
                            <span className="icon">🤐</span>
                            <h4>Suppressing Stims</h4>
                            <p>Holding back natural self-regulating movements</p>
                        </div>

                        <div className="masking-item">
                            <span className="icon">🎭</span>
                            <h4>Social Scripts</h4>
                            <p>Memorizing conversational patterns rather than responding naturally</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <h2>Autistic Burnout</h2>
                    <p className="lead">
                        Diving with heavy gear for too long leads to exhaustion.
                        In autism, this is burnout - a state of collapse from sustained masking.
                    </p>

                    <div className="burnout-warning">
                        <h3>Signs of Burnout:</h3>
                        <ul>
                            <li>Losing skills you previously had</li>
                            <li>Increased sensory sensitivities</li>
                            <li>Loss of speech or struggling with communication</li>
                            <li>Inability to mask even when you want to</li>
                            <li>Complete exhaustion that sleep doesn't fix</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}