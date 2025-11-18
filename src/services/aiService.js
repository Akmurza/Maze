/*const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;
const MODEL_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2";

// Системный промпт для AI ассистента
const SYSTEM_PROMPT = `You are a compassionate AI assistant for autistic adults. 
Your role is to:
- Provide emotional support without judgment
- Help with unmasking strategies
- Explain autism concepts clearly
- Suggest coping mechanisms for sensory overload
- Validate their experiences

Always be:
- Patient and understanding
- Clear and direct (no vague language)
- Respectful of their neurodivergence
- Encouraging but realistic

Keep responses under 150 words unless asked for more detail.`;

export async function sendMessage(userMessage, conversationHistory = []) {
    try {
        // Форматируем историю разговора
        const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...conversationHistory,
            { role: "user", content: userMessage }
        ];

        // Преобразуем в текстовый формат для Mistral
        const prompt = messages
            .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
            .join('\n\n');

        const response = await fetch(MODEL_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${HF_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inputs: prompt,
                parameters: {
                    max_new_tokens: 200,
                    temperature: 0.7,
                    top_p: 0.9,
                    return_full_text: false
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // Hugging Face возвращает массив
        const aiResponse = data[0]?.generated_text || "I'm having trouble responding. Please try again.";

        return aiResponse.trim();
    } catch (error) {
        console.error("AI Service Error:", error);
        throw new Error("Failed to get AI response. Check your API token.");
    }
}

// Предопределённые быстрые ответы
export const quickResponses = [
    "I'm feeling overwhelmed",
    "Help me understand masking",
    "What is sensory overload?",
    "I'm experiencing burnout"
];*/

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SYSTEM_PROMPT = `You are a compassionate AI assistant for autistic adults. 
Your role is to:
- Provide emotional support without judgment
- Help with unmasking strategies
- Explain autism concepts clearly
- Suggest coping mechanisms for sensory overload
- Validate their experiences

Always be patient, clear, direct, and encouraging.
Keep responses under 150 words unless asked for more detail.`;

export async function sendMessage(userMessage, conversationHistory = []) {
    try {
        const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...conversationHistory,
            { role: "user", content: userMessage }
        ];

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: messages,
                temperature: 0.7,
                max_tokens: 200
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();

    } catch (error) {
        console.error("AI Service Error:", error);
        throw new Error("Failed to get AI response. Check your API token.");
    }
}

export const quickResponses = [
    "I'm feeling overwhelmed",
    "Help me understand masking",
    "What is sensory overload?",
    "I'm experiencing burnout"
];