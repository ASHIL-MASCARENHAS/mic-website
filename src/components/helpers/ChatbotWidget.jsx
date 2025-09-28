import React from 'react';

// A simple placeholder for a future chatbot feature.
export const ChatbotWidget = () => {
    const ChatIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    );

    return (
        <button 
            className="fixed bottom-6 right-6 z-50 bg-primary h-16 w-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Open Chat"
        >
            <ChatIcon />
        </button>
    );
};
