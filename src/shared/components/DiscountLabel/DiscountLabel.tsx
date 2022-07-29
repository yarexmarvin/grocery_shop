import { CSSProperties, FC } from "react";
import styles from "./DiscountLabel.module.scss";

interface IDiscountLabel {
  discount: number;
  style?: CSSProperties;
}

const DiscountLabel: FC<IDiscountLabel> = ({ discount, style }) => {
  return (
    <div style={style} className={styles.label}>
      -{discount}%
    </div>
  );
};

export default DiscountLabel;
