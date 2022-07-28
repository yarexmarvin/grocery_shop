import Menu from "widgets/Header/components/Menu/Menu";
import styles from './Header.module.scss';
import Search from "widgets/Header/components/Search/Search";
import HeaderButton from "widgets/Header/components/HeaderButton/HeaderButton";


import logoDesk from "assets/logo/header-desk.svg";
import logoMobile from "assets/logo/header-mobile.svg";

import ProfileButton from "widgets/Header/components/ProfileButton/ProfileButton";

const Header = () => {
    const isWidthMore1024 = window.innerWidth > 1024;
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <div tabIndex={1} className={styles.logo}>
                <img src={isWidthMore1024 ? logoDesk : logoMobile} alt="logo" />
            </div>
            <Menu />
            <Search />
            <div className={styles.buttons}>
                <HeaderButton icon='heart' label='Избранное' func={() => console.log('go to favorites')} />
                <HeaderButton icon='package' label='Заказы' func={() => console.log('go to order')} />
                <HeaderButton icon='shopping-cart' label='Корзина' func={() => console.log('go to cart')} count={1} />
            </div>
            <ProfileButton />
        </div>
    </div>
}

export default Header;