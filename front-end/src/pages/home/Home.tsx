import './Home.css';
import { Header } from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero'
import { Statistic } from '../../components/statistics/Statistic'
import { Products } from '../../components/products/Products'
import { Features } from '../../components/features/Features';
import { Contact } from '../../components/contact/Contact'
import { Footer } from '../../components/footer/Footer';
import { WhatsAppButton } from '../../components/whatsapp/WhatsAppButton';
import { WhatsAppGroupFab } from '../../components/whatsapp/WhatsAppGroupFab';
import { useLanguage } from '../../i18n/LanguageContext';

export function Home() {
    const { t } = useLanguage();

    return(
    <>
        <Header />

        <Hero />

        <Statistic />

        <Products />

        <Features />

        <Contact />

        <Footer />

        <WhatsAppButton stacked />

        <WhatsAppGroupFab label={t.earlyAccess.fab} />
    </>
    )
}