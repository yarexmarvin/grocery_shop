import CategoryItem from 'pages/catalog/components/CategoryItem';
import { categories } from 'pages/catalog/data/Categories';
import { CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeader } from 'widgets/SectionHeader/SectionHeader';
import styles from './Catalog.module.scss';

const Catalog = () => {

    const location = useLocation();
    console.log(location)

    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1>Каталог</h1>
            {categories.map((category, _) => {
                return <CategoryItem key={category.id} label={category.label} img={category.img} wide={category.wide} variant={category.variant} />
            })}
        </div>
    </div>
}

export default Catalog;