import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home';
import { ProfitlyPage } from './pages/profitly/ProfitlyPage';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LanguageProvider><Home /></LanguageProvider>} />
            <Route path="/profitly" element={<ProfitlyPage />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App