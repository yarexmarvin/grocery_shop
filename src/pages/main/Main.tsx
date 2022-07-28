import Header from "widgets/Header/Header"

import styles from './Main.module.scss';

import bannerBg from 'assets/main-page/banner-bg.svg'

import bannerImg from 'assets/main-page/img.png'
import bannerImg2x from 'assets/main-page/img@2x.png'
import bannerImg3x from 'assets/main-page/img@3x.png'
import { SectionHeader } from "widgets/SectionHeader/SectionHeader";
import ItemCard from "widgets/ItemCard";
import OfferCard from "widgets/OfferCard/OfferCard";
import Map from "widgets/Map/Map";
import ArticleCard from "widgets/ArticleCard/ArticleCard";
import Footer from "widgets/Footer/Footer";

const Main = () => {

    return <div className={styles.container}>
        <div className={styles.banner}>
            <img className={styles.banner__bg} src={bannerBg} alt="banner bg" />
            <img className={styles.banner__img} src={bannerImg} srcSet={`${bannerImg} 1x, ${bannerImg2x} 2x, ${bannerImg3x} 3x`} alt='banner img' />
            <h2>Доставка бесплатно от 1000 ₽</h2>
        </div>

        <div className={styles.section}>
            <SectionHeader header="Акции" label="Все акции" navigateTo="sales" />
            <div className={styles.section__inner}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>

        <div className={styles.section}>
            <SectionHeader header="Новинки" label="Все новинки" navigateTo="updates" />
            <div className={styles.section__inner}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>

        <div className={styles.section}>
            <SectionHeader header="Покупали раньше" label="Все покупки" navigateTo="bought previously" />
            <div className={styles.section__inner}>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>

        <div className={styles.section}>
            <SectionHeader header="Специальные предложения" />
            <div className={styles.section__inner}>
                <OfferCard
                    title="Оформите карту «Северяночка»"
                    text="И получайте бонусы при покупке в магазинах и на сайте"
                    variant="primary"
                />
                <OfferCard
                    title="Оформите карту «Северяночка»"
                    text="И получайте бонусы при покупке в магазинах и на сайте"
                    variant="secondary"
                />
            </div>
        </div>

        <div className={styles.section}>
            <SectionHeader header="Наши магазины" />
            <Map />
        </div>

        <div className={styles.section}>
            <SectionHeader header="Статьи" label="Все статьи" navigateTo="articles" />
            <div className={styles.section__inner}>
                <ArticleCard
                    date="05.03.21"
                    title="Режим использования масок и перчаток на территории магазинов"
                    text='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
                />
                <ArticleCard
                    date="05.03.21"
                    title="Режим использования масок и перчаток на территории магазинов"
                    text='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
                />
                <ArticleCard
                    date="05.03.21"
                    title="Режим использования масок и перчаток на территории магазинов"
                    text='Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'
                />
            </div>
        </div>
    </div>
}

export default Main