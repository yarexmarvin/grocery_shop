import styles from './ProfileButton.module.scss'
import { useState } from 'react';
import useHide from 'hooks/useHide';

const ProfileButton = () => {


    const [open, setOpen] = useState(false);

    const domRef = useHide(() => {
        setOpen(false);
    });

    const windowWidth = window.innerWidth

    return <div className={styles.wrapper}>
        <div className={`${styles.container} ${open? styles.active: ''}`} ref={domRef}>
            <button className={styles.button} onClick={() => setOpen(p => !p)} >
                <div>
                    <div className={styles.avatar}></div>
                    <p className={styles.name}>FirstName</p>
                </div>
                <div>
                    {open ?<i className='icon-chevron-up'/>: <i className='icon-chevron-down'/>}
                </div>
            </button>
            {open && <div className={styles.links}>
                <p>Profile</p>
                <p>Exit</p>
            </div>}
        </div>
    </div>
}

export default ProfileButton;