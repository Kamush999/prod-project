import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');
if (!container) {
    throw new Error('root not find');
}
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export {
    ProfileSchema,
} from 'features/editableProfileCard/model/types/editableProfileCardSchema';
export {
    ValidateProfileErrors,
} from 'features/editableProfileCard/model/types/editableProfileCardSchema';
