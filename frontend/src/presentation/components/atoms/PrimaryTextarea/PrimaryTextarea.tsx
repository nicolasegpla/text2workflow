import React from 'react';
import './primary-textarea.scss';

interface PrimaryTextareaProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    error?: boolean;
}

function PrimaryTextarea({ label, value, onChange, name, error }: PrimaryTextareaProps) {
    return (
        <div className="primary-textarea">
            <label className="primary-textarea__label" htmlFor="primary-textarea__textarea">
                {label}
            </label>
            <textarea
                className="primary-textarea__input"
                value={value}
                onChange={onChange}
                name={name}
                id="primary-textarea__textarea"
            />
            {error && <p className="primary-textarea__error">Ingrese una tarea para continuar</p>}
        </div>
    );
}

export default PrimaryTextarea;
