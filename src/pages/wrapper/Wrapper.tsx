import { Outlet, useLocation } from 'react-router-dom';
import Footer from 'widgets/Footer/Footer';
import Header from 'widgets/Header/Header';
import MobileMenu from 'widgets/MobileMenu/MobileMenu';
import styles from './Wrapper.module.scss';

const Wrapper = () => {

    const history = useLocation();

    console.log(history)

    return <div className={styles.container}>
        <Header />
        <Outlet />
        <Footer />
        <MobileMenu />
    </div>
}

export default Wrapper;