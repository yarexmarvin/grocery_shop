import styles from './ProductSlider.module.scss';

import imgMock1 from 'assets/mocks/mockDetailProduct/Item.png'
import imgMock12x from 'assets/mocks/mockDetailProduct/Item@2x.png'
import imgMock13x from 'assets/mocks/mockDetailProduct/Item@3x.png'

import imgMock2 from 'assets/mocks/mockDetailProduct/Item-copy.png'
import imgMock3 from 'assets/mocks/mockDetailProduct/Item-copy-2.png'
import imgMock4 from 'assets/mocks/mockDetailProduct/Item-copy-3.png'
import imgMock5 from 'assets/mocks/mockDetailProduct/Item-copy-4.png'
import { useState } from 'react'
import DiscountLabel from 'shared/components/DiscountLabel/DiscountLabel';

const imgs = [
    {
        src: imgMock1,
        srcSet: `${imgMock1} 1x, ${imgMock12x} 2x, ${imgMock13x} 3x`
    },
    {
        src: imgMock2,
        srcSet: `${imgMock2} 1x, ${imgMock2} 2x, ${imgMock2} 3x`
    },
    {
        src: imgMock3,
        srcSet: `${imgMock3} 1x, ${imgMock3} 2x, ${imgMock3} 3x`
    },
    {
        src: imgMock4,
        srcSet: `${imgMock4} 1x, ${imgMock4} 2x, ${imgMock4} 3x`
    },
    {
        src: imgMock5,
        srcSet: `${imgMock5} 1x, ${imgMock5} 2x, ${imgMock5} 3x`
    },
]




const ProductSlider = () => {

    const [order, setOrder] = useState(0);

    const changeOrder = (num: number) => setOrder(num);

    return <div className={styles.container}>
        <div className={styles.preview}>
            {imgs.map((img, index) => {
                return <div className={index === order ? styles.active : ''} key={`${index}-photo`}>
                    <img onMouseEnter={() => changeOrder(index)}  src={img.src} srcSet={img.srcSet} alt="product preview" />
                </div>
            })}
        </div>

        <div className={styles.photo}>
            <DiscountLabel discount={50} style={{ top: '20px', right: '20px', position: 'absolute' }} />
            <img src={imgs[order].src} srcSet={imgs[order].srcSet} alt="product photo" />
        </div>

    </div>
}

export default ProductSlider;