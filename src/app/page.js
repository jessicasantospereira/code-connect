import { CardPost } from "@/components/CardPost";
import style from "./page.module.css"
import logger from "@/logger";
import Link from "next/link";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error(`Ops! Algo deu errado: ${response.statusText}`)
    return []
  }
  logger.info("Posts obtidos com sucesso!")
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className={style.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      <div className={style.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
