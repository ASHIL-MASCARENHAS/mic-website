import React from 'react';

export const useLoading = (duration = 3500) => {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);
    const LoadingScreenComponent = () => (
        <div className="fixed inset-0 bg-background z-[10000] flex items-center justify-center">
            <svg viewBox="0 0 130 50" className="w-48">
                <text className="mic-logo-path" fill="none" stroke="#E5E7EB" strokeWidth="1" x="0" y="40" fontSize="40">MIC<tspan fill="#F58B33" fontSize="60">.</tspan></text>
            </svg>
        </div>
    );
    return { isLoading, LoadingScreen: LoadingScreenComponent };
};

