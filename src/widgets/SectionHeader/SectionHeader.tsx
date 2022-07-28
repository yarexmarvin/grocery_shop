import { CSSProperties, FC } from "react";
import styles from "./SectionHeader.module.scss";

interface ISectionHeader {
  header: string;
  label?: string;
  navigateTo?: string;
  style?: SectionStylesType;
}

type SectionStylesType = {
  container?: CSSProperties,
  header?: CSSProperties,
  label?: CSSProperties
}

export const SectionHeader: FC<ISectionHeader> = ({
  header,
  label,
  navigateTo,
  style
}) => {
  const navigate = () => {
    console.log("navigate to", navigateTo);
  };

  return (
    <div style={style?.container} className={styles.container}>
      <h2 style={style?.header} className={styles.header}>{header}</h2>
      {label && <div className={styles.link_container}>
        <p style={style?.label} onClick={navigate}>
          {label}
        </p>
        <i className="icon-chevron-right" />
      </div>}
    </div>
  );
};
