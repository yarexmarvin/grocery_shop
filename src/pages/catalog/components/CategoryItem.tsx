import { ICategoryItem } from 'pages/catalog/data/CategoryTypes';
import { FC } from 'react';
import styles from './CategoryItem.module.scss';


const CategoryItem:FC<Omit<ICategoryItem, 'id'>> = ({label, img, wide = false, variant='secondary'}) => {

    const containerClasses = [styles.container, wide? styles.wide : '', variant==='secondary'? styles.secondary: styles.primary].join(' ');

    return <div className={containerClasses}>
        <img src={img.src} srcSet={img.srcSet} alt="category photo" />
        <p>{label}</p>
    </div>
}

export default CategoryItem;