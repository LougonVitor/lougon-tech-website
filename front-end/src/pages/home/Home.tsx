import './Home.css';
import { Header } from '../../components/header/Header'
import { Hero } from '../../components/hero/Hero'
import { Statistic } from '../../components/statistics/Statistic'
import { Products } from '../../components/products/Products'

export function Home() {
    return(
    <>
        <Header />

        <Hero />

        <Statistic />

        <Products />
    </>
    )
}