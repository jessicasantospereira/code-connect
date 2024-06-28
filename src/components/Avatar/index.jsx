import Image from "next/image";
import style from "./avatar.module.css";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <figure className={style.avatar}>
      <Image
        src={imageSrc}
        alt={`Avatar do(a) ${name}`}
        width={32}
        height={32}
      />
      <figcaption>@{name}</figcaption>
    </figure>
  );
};
