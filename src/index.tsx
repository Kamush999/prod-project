import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';
import { StoreProvider } from './app/providers/StoreProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

render(

    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
export {
    ProfileSchema,
} from 'features/editableProfileCard/model/types/editableProfileCardSchema';
export {
    ValidateProfileErrors,
} from 'features/editableProfileCard/model/types/editableProfileCardSchema';
