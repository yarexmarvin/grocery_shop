import styles from './MobileMenu.module.scss';
import { FC } from 'react';

interface IMobileMenu {
    count?: number;
}

const active = [styles.button, styles.active];

const MobileMenu: FC<IMobileMenu> = ({ count = 9 }) => {

    return <div className={styles.container}>
        {/* <div className={`${styles.button} ${styles.active}`}> */}
        <div className={active.join(' ')}>
            <i className="icon-menu" />
            <p>Каталог</p>
        </div>

        <div className={styles.button}>
            {!!count && <span>{count}</span>}
            <i className="icon-heart" />
            <p>Избранное</p>
        </div>

        <div className={styles.button}>
            {!!count && <span>{count}</span>}
            <i className="icon-package" />
            <p>Заказы</p>
        </div>

        <div className={styles.button}>
            {!!count && <span>{count}</span>}
            <i className="icon-shopping-cart" />
            <p>Корзина</p>
        </div>

        <div className={styles.button}>
            <div className={styles.avatar}></div>
        </div>

    </div>
}


export default MobileMenu;