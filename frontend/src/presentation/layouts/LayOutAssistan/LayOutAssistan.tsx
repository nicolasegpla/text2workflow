import React from 'react';
import './lay-out-assistan.scss';

interface LayOutAssistanProps {
    children: React.ReactNode;
}

export function LayOutAssistan({ children }: LayOutAssistanProps) {
    return <div className="lay-out-assistan">{children}</div>;
}
