import { CSSProperties, FC, useRef, useState } from "react";
import styles from "./Rating.module.scss";

interface IRating {
  count?: number;
  style?: CSSProperties;
}

const Rating: FC<IRating> = ({ count = 0, style }) => {
  const [value, setValue] = useState(count);

  const valueRef = useRef<number>(0);

  const saveValue = (num: number) => (valueRef.current = num);
  const changeValue = (num: number): void => setValue(num);

  console.log(valueRef.current);

  const generateRatingStars = (rating: number) =>
    Array(5)
      .fill(" ")
      .map((_, index) => <i className={`${index + 1 <= rating ? styles.active : styles.not_active} icon-star-copy`} />);

  return (
    <div
      style={style}
      className={styles.rating}
    >
      {generateRatingStars(value)}
      <div className="filled"></div>
    </div>
  );
};

export default Rating;
