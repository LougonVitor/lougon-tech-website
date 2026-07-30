import { Link } from 'react-router-dom'
import { HeroSection } from './sections/HeroSection'
import { InvestmentsSection } from './sections/InvestmentsSection'
import { FinanceSection } from './sections/FinanceSection'
import { AdvancedAnalysisSection } from './sections/AdvancedAnalysisSection'
import { FounderSection } from './sections/FounderSection'
import { EarlyAccessFab } from '../../components/whatsapp/EarlyAccessFab'
import { Icon } from './components/icons'
import './ProfitlyPage.css'

export function ProfitlyPage() {
    return (
        <div className="profitly-page">
            <Link to="/" className="pf-back-link">
                <Icon name="arrowLeft" size={13} />
                lougon.tech
            </Link>

            <HeroSection />
            <InvestmentsSection />
            <FinanceSection />
            <AdvancedAnalysisSection />
            <FounderSection />

            <EarlyAccessFab />
        </div>
    )
}
