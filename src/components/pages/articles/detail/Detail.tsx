import { getDetailArticles } from "@/api/blogAPI";
import DeleteButton from "@/components/domain/article/detail/DeleteButton";
import Image from "next/image";
import React from "react";

interface Props {
  id: string;
}

const Detail = async ({ id }: Props) => {
  const detailArticle = await getDetailArticles(id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Detail;
