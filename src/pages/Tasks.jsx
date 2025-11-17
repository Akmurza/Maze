import { useState } from 'react';
import { CheckCircle, Circle, Award } from 'lucide-react';
import { useUser } from '../context/UserContext';

const TASKS = [
    {
        id: 'task1',
        title: 'Allow yourself to stim freely',
        description: 'For 10 minutes today, let yourself engage in any stimming behavior without suppressing it.',
        points: 10,
        category: 'home'
    },
    {
        id: 'task2',
        title: 'Skip forced eye contact',
        description: 'In one conversation today, don\'t force eye contact. Notice how it feels.',
        points: 15,
        category: 'social'
    },
    {
        id: 'task3',
        title: 'Wear sensory-friendly clothes',
        description: 'Choose comfort over appearance. Wear what feels good on your skin.',
        points: 10,
        category: 'home'
    },
    {
        id: 'task4',
        title: 'Take an unmasking break',
        description: 'Spend 15 minutes in a quiet space without performing any social scripts.',
        points: 15,
        category: 'self-care'
    },
    {
        id: 'task5',
        title: 'Journal about masking',
        description: 'Write down one masking behavior you noticed today. No judgment, just observation.',
        points: 20,
        category: 'reflection'
    },
    {
        id: 'task6',
        title: 'Say "no" to sensory overload',
        description: 'Decline one activity that would overwhelm your senses. Your comfort matters.',
        points: 25,
        category: 'boundaries'
    }
];

export default function Tasks() {
    const { user, completeTask } = useUser();
    const [filter, setFilter] = useState('all');

    const filteredTasks = filter === 'all'
        ? TASKS
        : TASKS.filter(t => t.category === filter);

    const completedCount = TASKS.filter(t =>
        user.completedTasks.includes(t.id)
    ).length;

    return (
        <div className="tasks-page">
            <div className="tasks-header">
                <h1>🎯 Daily Unmasking Tasks</h1>
                <p>Small steps toward authentic living</p>

                <div className="progress-stats">
                    <div className="stat-card">
                        <Award size={32} />
                        <div>
                            <h3>{user.points}</h3>
                            <p>Total Points</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <CheckCircle size={32} />
                        <div>
                            <h3>{completedCount}/{TASKS.length}</h3>
                            <p>Tasks Completed</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="level-badge">Level {user.level}</span>
                        <p>Current Level</p>
                    </div>
                </div>
            </div>

            <div className="filter-buttons">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All Tasks
                </button>
                <button
                    className={filter === 'home' ? 'active' : ''}
                    onClick={() => setFilter('home')}
                >
                    🏠 Home
                </button>
                <button
                    className={filter === 'social' ? 'active' : ''}
                    onClick={() => setFilter('social')}
                >
                    👥 Social
                </button>
                <button
                    className={filter === 'self-care' ? 'active' : ''}
                    onClick={() => setFilter('self-care')}
                >
                    💙 Self-Care
                </button>
            </div>

            <div className="tasks-grid">
                {filteredTasks.map(task => {
                    const isCompleted = user.completedTasks.includes(task.id);

                    return (
                        <div key={task.id} className={`task-card ${isCompleted ? 'completed' : ''}`}>
                            <div className="task-header">
                                <h3>{task.title}</h3>
                                {isCompleted ? (
                                    <CheckCircle size={24} className="check-icon" />
                                ) : (
                                    <Circle size={24} className="check-icon" />
                                )}
                            </div>

                            <p className="task-description">{task.description}</p>

                            <div className="task-footer">
                                <span className="task-category">{task.category}</span>
                                <span className="task-points">+{task.points} points</span>
                            </div>

                            {!isCompleted && (
                                <button
                                    className="complete-btn"
                                    onClick={() => completeTask(task.id)}
                                >
                                    Mark Complete
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}