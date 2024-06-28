import { CardPost } from "@/components/CardPost";
import style from "./page.module.css"
import logger from "@/logger";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error(`Ops! Algo deu errado: ${response.statusText}`)
    return []
  }
  logger.info("Posts obtidos com sucesso!")
  return response.json()
}

export default async function Home() {
  const { data: posts } = await getAllPosts(1);
  return (
    <main className={style.grid}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
    </main>
  );
}
