import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/GlobalStyles.js'
import DarkModeProvider from './context/DarkModeContext.jsx'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ui/ErrorFallback.jsx'

// import {DarkModeProvider} from './context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <DarkModeProvider>
                <GlobalStyles />
                <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace('/')}>
                    <App />
                </ErrorBoundary>
            </DarkModeProvider>
    </StrictMode>,
)
