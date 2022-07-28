import { FC } from "react";
import styles from "widgets/OfferCard/OfferCard.module.scss";

// temporary
import banner1 from "assets/mocks/banner1.png";
import banner1_2x from "assets/mocks/banner1@2x.png";
import banner1_3x from "assets/mocks/banner1@3x.png";

const banner1Img = {
  src: banner1,
  srcSet: `${banner1} 1x, ${banner1_2x} 2x, ${banner1_3x} 3x`,
};
// 

type ImgType = {
  src?: string;
  srcSet?: string;
};

type VariantType = "primary" | "secondary";

interface IOfferCard {
  title: string;
  text: string;
  img?: ImgType;
  variant: VariantType;
}

const OfferCard: FC<IOfferCard> = ({ title, text, img, variant }) => {
  return (
    <div
      className={`${styles.banner} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <div>
        <img src={banner1Img.src} srcSet={banner1Img.srcSet} alt="banner img" />
      </div>
    </div>
  );
};

export default OfferCard;
