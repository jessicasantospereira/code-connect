import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <figure>
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
