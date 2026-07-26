import { Link } from 'react-router-dom'
import { HeroSection } from './sections/HeroSection'
import { InvestmentsSection } from './sections/InvestmentsSection'
import { FinanceSection } from './sections/FinanceSection'
import { AdvancedAnalysisSection } from './sections/AdvancedAnalysisSection'
import { FounderSection } from './sections/FounderSection'
import { WhatsAppGroupFab } from '../../components/whatsapp/WhatsAppGroupFab'
import { Icon } from './components/icons'
import './ProfitlyPage.css'

export function ProfitlyPage() {
    return (
        <div className="profitly-page">
            <Link to="/" className="pf-back-link">
                <Icon name="arrowRight" size={13} style={{ transform: 'rotate(180deg)' }} />
                lougon.tech
            </Link>

            <HeroSection />
            <InvestmentsSection />
            <FinanceSection />
            <AdvancedAnalysisSection />
            <FounderSection />

            <WhatsAppGroupFab label="Acesso antecipado no WhatsApp" />
        </div>
    )
}
