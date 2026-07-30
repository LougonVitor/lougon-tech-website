import { Header } from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero'
import { Statistic } from '../../components/statistics/Statistic'
import { Products } from '../../components/products/Products'
import { Features } from '../../components/features/Features'
import { Contact } from '../../components/contact/Contact'
import { Footer } from '../../components/footer/Footer'
import { WhatsAppButton } from '../../components/whatsapp/WhatsAppButton'
import { EarlyAccessFab } from '../../components/whatsapp/EarlyAccessFab'

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Statistic />
            <Products />
            <Features />
            <Contact />
            <Footer />

            <WhatsAppButton stacked />
            <EarlyAccessFab />
        </>
    )
}
