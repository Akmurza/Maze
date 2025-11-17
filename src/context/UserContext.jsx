import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('autismCompanionUser');
        return saved ? JSON.parse(saved) : {
            points: 0,
            level: 1,
            completedTasks: [],
            streak: 0,
            lastVisit: Date.now()
        };
    });

    // Сохраняем в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('autismCompanionUser', JSON.stringify(user));
    }, [user]);

    const addPoints = (amount) => {
        setUser(prev => ({
            ...prev,
            points: prev.points + amount,
            level: Math.floor((prev.points + amount) / 100) + 1
        }));
    };

    const completeTask = (taskId) => {
        if (user.completedTasks.includes(taskId)) return;

        setUser(prev => ({
            ...prev,
            completedTasks: [...prev.completedTasks, taskId],
            points: prev.points + 10,
            streak: prev.streak + 1
        }));
    };

    const resetProgress = () => {
        setUser({
            points: 0,
            level: 1,
            completedTasks: [],
            streak: 0,
            lastVisit: Date.now()
        });
    };

    return (
        <UserContext.Provider value={{ user, addPoints, completeTask, resetProgress }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
}