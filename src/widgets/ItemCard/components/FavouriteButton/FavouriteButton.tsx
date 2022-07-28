import icon from "assets/icons/heart.svg";
import { CSSProperties, FC, useEffect, useState } from "react";
import styles from "./FavouriteButton.module.scss";

interface IFavouriteButton {
  active?: boolean;
  style?: CSSProperties;
}

const FavouriteButton: FC<IFavouriteButton> = ({ active = false, style }) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const toggleActive = () => setIsActive((prev) => !prev);

  useEffect(() => {
    console.log("liked");
  }, [isActive]);

  return (
    <button
      style={style}
      onClick={toggleActive}
      className={`${styles.button} ${isActive && styles.active}`}
    >
      <i className="icon-heart" />      
    </button>
  );
};

export default FavouriteButton;
