import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { ProfitlyPage } from './pages/profitly/ProfitlyPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profitly" element={<ProfitlyPage />} />
                {/* O .htaccess devolve o index.html em qualquer rota; o que não existe volta para a home. */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
