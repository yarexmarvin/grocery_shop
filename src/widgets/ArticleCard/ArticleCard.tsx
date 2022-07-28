import { FC } from "react";
import styles from "widgets/ArticleCard/ArticleCard.module.scss";

// temporary
import article1Img from "assets/mocks/article1.png";
import article1Img_2x from "assets/mocks/article1@2x.png";
import article1Img_3x from "assets/mocks/article1@3x.png";

const article1Imgs = {
  src: article1Img,
  srcSet: `${article1Img} 1x, ${article1Img_2x} 2x, ${article1Img_3x} 3x`,
};

// 

type ImgType = {
  src: string;
  srcSet: string;
};

interface IArticleCard {
  img?: ImgType;
  title: string;
  text: string;
  date: string;
}

const ArticleCard: FC<IArticleCard> = ({ img = article1Imgs, title, text, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img {...img} alt="article" />
      </div>

      <div className={styles.content}>
        <p>{date}</p>
        <h5>{title}</h5>
        <p>{text}</p>
        <button className={styles.button}>Подробнее</button>
      </div>
    </div>
  );
};

export default ArticleCard;
