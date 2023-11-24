import { getAllArticles } from "@/api/blogAPI";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = async () => {
  // const articles = await getAllArticles();
  const API_URL = process.env.ANEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api`, { cache: "no-store" });
  const articles = await res.json();
  return (
    <div>
      {articles.map((article) => (
        <article key={article.id} className="shadow my-4 flex flex-col">
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 pb-4 font-bold">
              Technology
            </Link>
            <Link
              className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
              href={`articles/${article.id}`}
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">{article.createdAt}</p>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 pb-6"
            >
              {article.content.length > 70
                ? article.content.substring(0, 70) + "..."
                : article.content}
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-pink-800 cursor hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
