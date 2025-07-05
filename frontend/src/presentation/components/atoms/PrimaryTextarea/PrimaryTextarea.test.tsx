import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import PrimaryTextarea from './PrimaryTextarea';

describe('<PrimaryTextarea />', () => {
    it('debe renderizar el componente correctamente', () => {
        render(
            <PrimaryTextarea
                label="Primary Textarea"
                value=""
                onChange={() => {}}
                name="primary-textarea"
            />
        );

        expect(screen.getByLabelText('Primary Textarea')).toBeInTheDocument();
    });

    it('debe llamar al onChange cuando el usuarios escribe en el textarea', () => {
        const handleChange = vi.fn();
        render(
            <PrimaryTextarea
                label="Primary Textarea"
                value=""
                onChange={handleChange}
                name="primary-textarea"
            />
        );

        const textarea = screen.getByLabelText('Primary Textarea');

        fireEvent.change(textarea, { target: { value: 'Nueva tarea' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        //expect(handleChange).toHaveBeenCalledWith('Nueva tarea');
    });

    it('debe renderizar el mensaje de error si error es true', () => {
        render(
            <PrimaryTextarea
                label="Primary Textarea"
                value=""
                onChange={() => {}}
                name="primary-textarea"
                error={true}
            />
        );

        expect(screen.getByText('Ingrese una tarea para continuar')).toBeInTheDocument();
    });

    it('No debe renderizar el mensaje de error si error es false', () => {
        render(
            <PrimaryTextarea
                label="Primary Textarea"
                value=""
                onChange={() => {}}
                name="primary-textarea"
                error={false}
            />
        );

        expect(screen.queryByText(/Ingrese una tarea para continuar/i)).toBeNull();
    });
});
