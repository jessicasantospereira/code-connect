import Image from "next/image";
import styles from "./aside.module.css";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside>
      <Image
        className={styles.aside}
        src={logo}
        alt="Logo da Code Connect"
        width={100}
        height={100}
      />
    </aside>
  );
};
