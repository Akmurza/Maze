import { useState, useRef, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import { sendMessage, quickResponses } from '../services/aiService';

export default function AIAssistant() {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: '🐋 Hello! I\'m here to support you on your unmasking journey. How are you feeling today?'
        }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll к новым сообщениям
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (message = input) => {
        if (!message.trim() || loading) return;

        const userMessage = { role: 'user', content: message };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            // Берём последние 6 сообщений для контекста
            const history = messages.slice(-6);
            const aiResponse = await sendMessage(message, history);

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: aiResponse
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: '😔 Sorry, I encountered an error. Please check your internet connection or API token.'
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleQuickResponse = (text) => {
        handleSend(text);
    };

    return (
        <div className="ai-assistant-page">
            <div className="chat-container">
                <div className="chat-header">
                    <h1>🐋 AI Companion</h1>
                    <p>Your safe space for authentic conversation</p>
                </div>

                <div className="messages-container">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.role}`}>
                            <div className="message-avatar">
                                {msg.role === 'user' ? '🌊' : '🐋'}
                            </div>
                            <div className="message-content">
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="message assistant">
                            <div className="message-avatar">🐋</div>
                            <div className="message-content">
                                <Loader className="spinner" size={16} />
                                Thinking...
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="quick-responses">
                    {quickResponses.map((text, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleQuickResponse(text)}
                            className="quick-btn"
                            disabled={loading}
                        >
                            {text}
                        </button>
                    ))}
                </div>

                <div className="chat-input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Share your thoughts..."
                        disabled={loading}
                        className="chat-input"
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={loading || !input.trim()}
                        className="send-btn"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}