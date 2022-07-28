import { CSSProperties, FC, useEffect, useState } from "react";
import minusIcon from "assets/icons/minus.svg";
import plusIcon from "assets/icons/plus.svg";
import styles from "./BasketButton.module.scss";

interface ProductButton {
  label: string;
  style?: CSSProperties
}

const BasketButton: FC<ProductButton> = ({ label, style }) => {
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    console.log("basket updated");
  }, [itemCount]);

  if (itemCount > 0) {
    return (
      <button style={style} className={`${styles.add_subtract} ${styles.button}`}>
        <div onClick={() => setItemCount((prev) => prev - 1)}>
          <img src={minusIcon} alt="minus" />
        </div>
        {itemCount}
        <div onClick={() => setItemCount((prev) => prev + 1)}>
          <img src={plusIcon} alt="plus" />
        </div>
      </button>
    );
  }

  return (
    <button onClick={() => setItemCount(1)} className={`${styles.in_basket} ${styles.button}`}>
      {label}
    </button>
  );
};

export default BasketButton;
