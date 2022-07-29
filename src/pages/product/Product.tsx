import Rating from "shared/components/Rating/Rating";
import ProductDetails from "widgets/ProductDetails/ProductDetails";
import styles from './Product.module.scss';


const Product = () => {

    const starsStyle = {
        container: {marginLeft: '24px'},
        star: { margin: '2px' }
    }

    return <div className={styles.container}>
        <h2 className={styles.header}>Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</h2>
        <div className={styles.actions}>
            <p className={styles.art}>арт. 371431</p>
            <div className={styles.rating}>
                <Rating count={2} style={starsStyle} />
                <a href="#">3 отзыва</a>
            </div>
            <div className={styles.share}>
                <i className="icon-share-2" />
                <p>Поделиться</p>
            </div>
            <div className={styles.favourite}>
                <i className="icon-heart" />
                <p>В избранное</p>
            </div>

        </div>
        <ProductDetails />
    </div>
}

export default Product;