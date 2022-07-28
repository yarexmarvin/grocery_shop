import styles from './Footer.module.scss';

import logo from 'assets/logo/footer.svg';

import phoneIcon from 'assets/icons/phone.svg'

import igIcon from 'assets/icons/social/instagram.svg';
import fbIcon from 'assets/icons/social/facebook.svg';
import okIcon from 'assets/icons/social/ok.svg';
import vkIcon from 'assets/icons/social/vkontakte.svg';

import bgElement from 'assets/bg-footer.svg';


const Footer = () => {

    return <div className={styles.wrapper}>

        <img className={styles.bg} src={bgElement} alt="bg" />

        <div className={styles.container}>

            <div>

                <div className={styles.logo}>
                    <img src={logo} alt='logo' />
                </div>

                <div className={styles.links}>
                    <ul>
                        <li><a>О компании</a></li>
                        <li><a>Контакты</a></li>
                        <li><a>Вакансии</a></li>
                        <li><a>Статьи</a></li>
                        <li><a>Политика обработки персональных данных</a></li>
                    </ul>
                </div>

            </div>

            <div>

                <div className={styles.social}>
                    <img src={igIcon} alt="instagram" />
                    <img src={vkIcon} alt="instagram" />
                    <img src={okIcon} alt="instagram" />
                    <img src={fbIcon} alt="instagram" />
                </div>

                <div className={styles.contact}>
                    <img src={phoneIcon} alt="phone icon" />
                    <p>8 800 999 99 99</p>
                </div>

            </div>

        </div>
    </div>
}

export default Footer