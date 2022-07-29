import Rating from "shared/components/Rating/Rating";
import ProductDetails from "widgets/ProductDetails/ProductDetails";
import styles from './Product.module.scss';


const Product = () => {

    return <div className={styles.container}>
        
        <ProductDetails />
    </div>
}

export default Product;