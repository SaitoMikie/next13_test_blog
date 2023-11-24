import { notFound } from "next/navigation";
import { Article } from "./types/blogAPItypes";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); //SSR
  if (!res.ok) {
    console.log(res.statusText);
    throw new Error("レスポンスエラー");
  }

  const articles = await res.json();
  return articles;
};

export const getDetailArticles = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 }, //ISR
  });

  if (res.status === 404) {
    console.log(res.statusText);
    notFound();
  }

  if (!res.ok) {
    console.log(res.statusText);
    throw new Error("レスポンスエラー");
  }

  const article = await res.json();
  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDateTime = new Date().toISOString();

  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      content,
      createAt: currentDateTime,
    }),
  });

  if (!res.ok) {
    console.log(res.statusText);
    throw new Error("レスポンスエラー");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json();
  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    console.log(res.statusText);
    throw new Error("レスポンスエラー");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deleteArticle = await res.json();
  return deleteArticle;
};
