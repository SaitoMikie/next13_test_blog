import Detail from "@/components/pages/articles/detail/Detail";
import React from "react";

const Article = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Detail id={params.id} />
    </div>
  );
};

export default Article;
