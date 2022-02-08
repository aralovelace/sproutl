import { useListSinglePost, usePostCreateStateEffect } from "../state";
import { Comments } from "./Comments.component";
import Link from "next/link";

export const Post = () => {
  usePostCreateStateEffect();
  const { PostState } = useListSinglePost();
  return (
    <section className="flex flex-wrap justify-center">
      {PostState && PostState.post !== null && (
        <section className="mt-10">
          <h2 className="text-2xl text-sky-700 underline">
            {PostState.post[0]?.title}
          </h2>
          <p className="mt-5">{PostState.post[0]?.body}</p>
          <div className="mt-8">
            <h4 className="text-gray-500">Comments:</h4>
            <Comments />
          </div>
        </section>
      )}
      <div className="mb-8 w-full">
        <Link href="/">
          <a className="hover:underline font-semibold">BACK</a>
        </Link>
      </div>
    </section>
  );
};
