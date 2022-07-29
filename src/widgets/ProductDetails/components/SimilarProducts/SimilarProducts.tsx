
import styles from './SimilarProducts.module.scss';

import img1 from 'assets/mocks/mockDetailProduct/similar/image.png'
import img2 from 'assets/mocks/mockDetailProduct/similar/image-1.png'
import img3 from 'assets/mocks/mockDetailProduct/similar/image-2.png'
import img4 from 'assets/mocks/mockDetailProduct/similar/image-3.png'

const products = [
    {
        id: 'asdad',
        img: {
            src: img1,
            srcSet: `${img1} 1x, ${img1} 2x, ${img1} 3x`,
        },
        price: '100,99 ₽'
    },
    {
        id: 'asda32d',
        img: {
            src: img2,
            srcSet: `${img2} 1x, ${img2} 2x, ${img2} 3x`,
        },
        price: '100,99 ₽'
    },
    {
        id: '45dad',
        img: {
            src: img3,
            srcSet: `${img3} 1x, ${img3} 2x, ${img3} 3x`,
        },
        price: '100,99 ₽'
    },
    {
        id: 'asdaasd',
        img: {
            src: img4,
            srcSet: `${img4} 1x, ${img4} 2x, ${img4} 3x`,
        },
        price: '100,99 ₽'
    },
]


const SimilarProducts = () => {

    return <div className={styles.wrapper}>
        <p>Похожие</p>
        <div className={styles.container}>
        {products.map((product, _)=>{
            return <div key={product.id}>
                <img src={product.img.src} srcSet={product.img.srcSet} alt="similar product photo" />
                <p>{product.price}</p>
            </div>
        })}
        </div>
    </div>
}

export default SimilarProducts;