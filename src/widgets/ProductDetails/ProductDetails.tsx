import Rating from "shared/components/Rating/Rating";
import ProductFeedback from "widgets/ProductDetails/components/ProductFeedback/ProductFeedback";
import ProductInfo from "widgets/ProductDetails/components/ProductInfo/ProductInfo";
import ProductSlider from "widgets/ProductDetails/components/ProductSlider/ProductSlider";
import SimilarProducts from "widgets/ProductDetails/components/SimilarProducts/SimilarProducts";

import styles from './ProductDetails.module.scss';
const ProductDetails = () => {


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
        <ProductSlider />
        <ProductInfo />
        <SimilarProducts />
        <ProductFeedback />
    </div>
}

export default ProductDetails;