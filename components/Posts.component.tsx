import { useListAllPostsEffect, usePostsCreateStateEffect } from "../state";
import { PostInterface } from "../interface";
import Link from "next/link";

export const Posts = () => {
  usePostsCreateStateEffect();
  const { PostsState } = useListAllPostsEffect();
  return (
    <section className="flex flex-wrap justify-center">
      {PostsState &&
        PostsState.map((post: PostInterface, index: number) => (
          <div
            key={index}
            className="mx-5 mb-8 w-1/4 border border-sky-500 p-4"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <Link href={`/post/${post.id}`}>
              <a className=" mt-8 block w-32 cursor-pointer rounded bg-blue-400 py-3 text-center font-semibold text-white hover:text-blue-800">
                Read More
              </a>
            </Link>
          </div>
        ))}
    </section>
  );
};
