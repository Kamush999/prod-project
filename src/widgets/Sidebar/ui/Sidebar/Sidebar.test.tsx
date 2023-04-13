import { screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });
});
