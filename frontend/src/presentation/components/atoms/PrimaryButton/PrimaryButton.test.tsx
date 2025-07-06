import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { PrimaryButton } from './PrimaryButton';

describe('<PrimaryButton />', () => {
    it('debe renderizar el componente correctamente', () => {
        render(<PrimaryButton textButton="Primary Button" onClick={() => {}} />);

        expect(screen.getByText('Primary Button')).toBeInTheDocument();
    });

    it('debe llamar al onClick cuando el usuario hace click en el botón', () => {
        const handleClick = vi.fn();
        render(<PrimaryButton textButton="Primary Button" onClick={handleClick} />);

        const button = screen.getByText('Primary Button');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('debe renderizar el componente correctamente con el texto "Primary Button"', () => {
        render(<PrimaryButton textButton="Primary Button" onClick={() => {}} />);

        expect(screen.getByText('Primary Button')).toBeInTheDocument();
    });
});
