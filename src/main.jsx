import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/GlobalStyles.js'
import DarkModeProvider from './context/DarkModeContext.jsx'
// import {DarkModeProvider} from './context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DarkModeProvider>
            <GlobalStyles />
            <App />
        </DarkModeProvider>
    </StrictMode>,
)
