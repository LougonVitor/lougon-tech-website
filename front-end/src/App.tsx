import './App.css'
import { Home } from './pages/home/Home';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
    return (
    <>
        <LanguageProvider>
            <Home />
        </LanguageProvider>
    </>
    )
}

export default App