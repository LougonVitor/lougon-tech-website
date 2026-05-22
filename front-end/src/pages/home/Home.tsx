import './Home.css';
import { Header } from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero'
import { Statistic } from '../../components/statistic/Statistic'

export function Home() {
    return(
    <>
        <Header />

        <Hero />

        <Statistic />
    </>
    )
}