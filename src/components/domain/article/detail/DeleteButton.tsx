"use client";
import { deleteArticle } from "@/api/blogAPI";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  id: string;
}

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteArticle(id);

    router.push("/");
    router.refresh();
  };
  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
