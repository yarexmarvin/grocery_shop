import ProductInfo from "widgets/ProductDetails/components/ProductInfo/ProductInfo";
import ProductSlider from "widgets/ProductDetails/components/ProductSlider/ProductSlider";
import SimilarProducts from "widgets/ProductDetails/components/SimilarProducts/SimilarProducts";

import styles from './ProductDetails.module.scss';
const ProductDetails = () => {

    return <div className={styles.container}>
        <ProductSlider />
        <ProductInfo />
        <SimilarProducts />
    </div>
}

export default ProductDetails;