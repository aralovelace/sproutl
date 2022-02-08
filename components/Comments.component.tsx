import { useListAllCommentsEffect, usePostCommentStateEffect } from "../state";
import { CommentInterface } from "../interface";

export const Comments = () => {
  usePostCommentStateEffect();
  const { CommentsState } = useListAllCommentsEffect();
  return (
    <div className="mt-6 w-full">
      {CommentsState &&
        CommentsState.map((comment: CommentInterface, index: number) => (
          <div
            key={index}
            className=" mb-8 w-full border border-dotted border-gray-300 p-4"
          >
            <p className="text-sm text-gray-500">{comment.name}</p>
            <p className="text-sm text-gray-500">{comment.email}</p>
            <p className="mt-5 text-base">{comment.body}</p>
          </div>
        ))}
    </div>
  );
};
