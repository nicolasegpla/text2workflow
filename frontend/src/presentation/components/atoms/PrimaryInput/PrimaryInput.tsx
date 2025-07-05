import React from 'react';
import './primary-input.scss';

interface PrimaryInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export function PrimaryInput({ label, value, onChange, name }: PrimaryInputProps) {
    return (
        <div className="primary-input">
            <label htmlFor="primary-input__input">{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                type="text"
                id="primary-input__input"
            />
        </div>
    );
}
