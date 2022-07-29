import BasketButton from 'shared/components/BasketButton/BasketButton';
import styles from './ProductInfo.module.scss';


const mockDetails = [
    {
        key: 'Бренд',
        value: 'ПРОСТОКВАШИНО'
    },
    {
        key: 'Страна производителя',
        value: 'Россия'
    },
    {
        key: 'Упаковка',
        value: '180 г'
    },
]


const buttonStyles = {maxWidth: '376px' ,height: '60px', fontSize: '24px', lineHeight: '36px'}
const buttonIcon = <i className="icon-shopping-cart"/>

const ProductInfo = () => {

    return <div className={styles.container}>

        <div className={styles.prices}>
            <div>
                <p className={styles.regular}>192,69 ₽</p>
                <p className={styles.label}>Обычная цена</p>
            </div>
            <div>
                <p className={styles.card}>108,99 ₽</p>
                <div className={styles.label__container}>
                    <p className={styles.label}>С картой Северяночки</p>
                    <i className="icon-info" />
                </div>
            </div>
        </div>

        <BasketButton iconStart={buttonIcon} style={buttonStyles} variant="primary" label="В корзину"/>

        <div className={styles.bonus}>
            <i className="icon-smile" />
            <p>Вы получаете <span>10 бонусов</span></p>
        </div>

        <div className={styles.notify}>
            <i className="icon-bell-off" />
            <p>Уведомить о снижении цены</p>
        </div>

        <div className={styles.details}>
            {mockDetails.map((detail, index) => {
                return <div key={`${index}-detail`}>
                    <p>{detail.key}</p>
                    <p>{detail.value}</p>
                </div>
            })}
        </div>

    </div>
}

export default ProductInfo