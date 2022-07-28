import styles from "./ItemCard.module.scss";
import mockImg from "assets/mocks/milk.png";
import FavouriteButton from "widgets/ItemCard/components/FavouriteButton/FavouriteButton";
import DiscountLabel from "widgets/ItemCard/components/DiscountLabel/DiscountLabel";
import Button from "widgets/ItemCard/components/BasketButton/BasketButton";
import Rating from "widgets/ItemCard/components/Rating/Rating";
import { CSSProperties } from "react";


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
  rating: {
    margin: "8px 0",
    justifyContent: "flex-start",
  },
};

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
        style={childrenStyle.rating}
        count={3}
      />

      <Button label="В корзину" />
    </div>
  );
};

export default ItemCard;
