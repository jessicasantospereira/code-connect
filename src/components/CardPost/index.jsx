import Image from "next/image";
import { Avatar } from "../Avatar";
import style from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/post/${post.slug}`} className={style.link}>
      <article className={style.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={style.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              width={438}
              height={133}
              alt={`Capa do post de titulo: ${post.title}`}
            />
          </figure>
        </header>
        <section className={style.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={style.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
