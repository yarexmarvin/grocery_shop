import { FC } from "react";
import styles from './HeaderButton.module.scss'

interface IHeaderButton {
    icon: string;
    label: string;
    count?: number;
    func: () => void;
}

const HeaderButton: FC<IHeaderButton> = ({ icon, label, func, count }) => {

    return <button className={styles.container} onClick={func}>
        <div>
            {!!count && <span>{count}</span>}
            <i className={`icon-${icon}`} />
        </div>
        <p>{label}</p>
    </button>
}


export default HeaderButton;