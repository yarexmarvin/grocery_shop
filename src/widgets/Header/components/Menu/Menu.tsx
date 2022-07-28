import { useState } from "react";
import styles from "./Menu.module.scss";
import useHide from "hooks/useHide";
import { useLocation, useNavigate } from "react-router-dom";
const menuItems = [
  {
    title: "Молоко, сыр, яйцо",
  },
  {
    title: "Напитки",
  },
  {
    title: "Бакалея",
  },
  {
    title: "Непродовольственные товары",
  },
  {
    title: "Хлеб",
  },
  {
    title: "Кондитерские изделия",
  },
  {
    title: "Здоровое питание",
  },
  {
    title: "Детское питание",
  },
  {
    title: "Фрукты и овощи",
  },
  {
    title: "Чай, кофе",
  },
  {
    title: "Зоотовары",
  },
  {
    title: "Мясо, птица, колбаса",
  },
  {
    title: "Замороженные продукты",
  },
];

const Menu = () => {

  const [shown, setShown] = useState(false);
  const navigate = useNavigate();

  
  const domRef = useHide(() => {
    setShown(false);
  });


  return (
    <div ref={domRef} tabIndex={2} onKeyDown={() => setShown((prev) => !prev)}>
      <button className={styles.button} onClick={() => {navigate('catalog');setShown((prev) => false);  }} onMouseEnter={() => setShown((prev) => true)} >
        <i className="icon-menu" />
        <p>Каталог</p>
      </button>
      <div className={`${styles.items} ${shown ? styles.active : ""}`}>
        {menuItems.map((item, index) => {
          return <div key={`${index}-menu-item`}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};
export default Menu;
