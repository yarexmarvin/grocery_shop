import styles from "./ItemCard.module.scss";
import mockImg from "assets/mocks/milk.png";
import FavouriteButton from "widgets/ItemCard/components/FavouriteButton/FavouriteButton";
import { CSSProperties } from "react";
import DiscountLabel from "shared/components/DiscountLabel/DiscountLabel";
import BasketButton from "shared/components/BasketButton/BasketButton";
import Rating from "shared/components/Rating/Rating";


type IStyles = {
  [K in string]: CSSProperties;
}

const childrenStyle: IStyles = {
  favourite: {
    position: "absolute",
    top: "8px",
    right: "0",
  },
  discount: {
    position: "absolute",
    left: "2px",
    bottom: "8px",
  },
};

const ratingStyles: IStyles = {
  container: {
    margin: "8px 0",
    justifyContent: "flex-start",
  }
}

const ItemCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <FavouriteButton
          style={childrenStyle.favourite}
        />
        <img src={mockImg} alt="product" />
        <DiscountLabel
          style={childrenStyle.discount}
          discount={50}
        />
      </div>

      <div className={styles.prices}>
        <div>
          <p className={styles.price_card}>50,30 ₽</p>
          <p className={styles.label}>С картой</p>
        </div>
        <div>
          <p className={styles.price_regular}>70,20 ₽</p>
          <p className={styles.label}>Обычная</p>
        </div>
      </div>

      <div>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elitadipisicing
          elit. elitadipisicing elit
        </p>
      </div>

      <Rating
        style={ratingStyles}
        count={3}
      />
      <BasketButton  label="В корзину"/>
    </div>
  );
};

export default ItemCard;
