import { useUser } from '../context/UserContext';
import { TrendingUp, Award, Target, Calendar } from 'lucide-react';

export default function Progress() {
    const { user, resetProgress } = useUser();

    const totalTasks = 6;
    const completionRate = ((user.completedTasks.length / totalTasks) * 100).toFixed(0);
    const progressToNextLevel = ((user.points % 100) / 100) * 100;

    const achievements = [
        {
            id: 1,
            title: 'First Step',
            desc: 'Complete your first task',
            unlocked: user.completedTasks.length >= 1,
            icon: '🌊'
        },
        {
            id: 2,
            title: 'Committed',
            desc: 'Complete 3 tasks',
            unlocked: user.completedTasks.length >= 3,
            icon: '🐋'
        },
        {
            id: 3,
            title: 'Unmasked',
            desc: 'Complete all tasks',
            unlocked: user.completedTasks.length >= totalTasks,
            icon: '🏆'
        },
        {
            id: 4,
            title: 'Level 5',
            desc: 'Reach level 5',
            unlocked: user.level >= 5,
            icon: '⭐'
        },
    ];

    return (
        <div className="progress-page">
            <section className="page-header">
                <h1>📊 Your Progress</h1>
                <p className="subtitle">Tracking your unmasking journey</p>
            </section>

            <div className="container">
                <div className="stats-overview">
                    <div className="stat-box">
                        <Award size={40} className="stat-icon" />
                        <div>
                            <h3>{user.points}</h3>
                            <p>Total Points</p>
                        </div>
                    </div>

                    <div className="stat-box">
                        <Target size={40} className="stat-icon" />
                        <div>
                            <h3>Level {user.level}</h3>
                            <p>Current Level</p>
                        </div>
                    </div>

                    <div className="stat-box">
                        <TrendingUp size={40} className="stat-icon" />
                        <div>
                            <h3>{completionRate}%</h3>
                            <p>Tasks Completed</p>
                        </div>
                    </div>

                    <div className="stat-box">
                        <Calendar size={40} className="stat-icon" />
                        <div>
                            <h3>{user.streak}</h3>
                            <p>Day Streak</p>
                        </div>
                    </div>
                </div>

                <div className="level-progress-section">
                    <h2>Level Progress</h2>
                    <div className="level-bar-container">
                        <div className="level-info">
                            <span>Level {user.level}</span>
                            <span>{user.points % 100} / 100 XP</span>
                        </div>
                        <div className="level-bar">
                            <div
                                className="level-bar-fill"
                                style={{ width: `${progressToNextLevel}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="achievements-section">
                    <h2>🏆 Achievements</h2>
                    <div className="achievements-grid">
                        {achievements.map(achievement => (
                            <div
                                key={achievement.id}
                                className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                            >
                                <div className="achievement-icon">{achievement.icon}</div>
                                <h3>{achievement.title}</h3>
                                <p>{achievement.desc}</p>
                                {achievement.unlocked && <span className="unlocked-badge">✓ Unlocked</span>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="task-history-section">
                    <h2>📝 Completed Tasks</h2>
                    {user.completedTasks.length === 0 ? (
                        <p className="empty-state">No tasks completed yet. Start your journey on the Tasks page!</p>
                    ) : (
                        <div className="completed-tasks-list">
                            {user.completedTasks.map((taskId, index) => (
                                <div key={taskId} className="completed-task-item">
                                    <span className="task-number">#{index + 1}</span>
                                    <span className="task-id">Task {taskId}</span>
                                    <span className="task-check">✓</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="reset-section">
                    <button
                        onClick={() => {
                            if (window.confirm('Are you sure? This cannot be undone.')) {
                                resetProgress();
                            }
                        }}
                        className="reset-btn"
                    >
                        Reset All Progress
                    </button>
                </div>
            </div>
        </div>
    );
}