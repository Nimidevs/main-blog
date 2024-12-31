"use client";
import Link from "next/link";
import { Post } from "@/types/post.interface";
import Posts from "./Posts";
import React, { useState } from "react";
import { PaginationMeta } from "@/types/pagination.types";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

interface RecentPostsPropsType {
  recentPosts?: Post[];
  paginationMeta?: PaginationMeta;
  recentPostsError?: string;
}

const Recentposts: React.FC<RecentPostsPropsType> = ({
  recentPosts,
  paginationMeta,
  recentPostsError,
}) => {
  const [localRecentPosts, setLocalRecentPosts] = useState(recentPosts);
  const [noOfPages, setNoOfPages] = useState(paginationMeta?.totalPages);
  const [currentPage, setCurrentPage] = useState(paginationMeta?.currentPage);
  const [localRecentPostsError, setLocalRecentPostsError] =
    useState(recentPostsError);

  async function getRecentPosts(page: number = 1) {
    try {
      const recentRes = await fetch(
        `http://localhost:8080/api/posts/recentposts?page=${page}&limit=10`
      );
      if (!recentRes.ok) {
        throw new Error("Failed to fetch recent posts");
      }
      const recentData = await recentRes.json();
      console.log(recentData);
      setLocalRecentPosts(recentData.posts);
      setNoOfPages(recentData.pagination.totalPages);
      setCurrentPage(recentData.pagination.currentPage);
      setLocalRecentPostsError(undefined);
    } catch (error) {
      setLocalRecentPostsError("failed to fetch Recent Posts, Try again later");
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-20">
      {localRecentPostsError ? (
        <div>
          Failed to fetch recent posts
          <button onClick={() => getRecentPosts()}>Retry</button>
        </div>
      ) : localRecentPosts && localRecentPosts?.length > 0 ? (
        <div className="flex flex-col gap-12">
          {localRecentPosts.map((post) => (
            <Link href={`/post/${post._id}`} key={post._id}>
              <Posts post={post} recent={true} />
            </Link>
          ))}
        </div>
      ) : (
        <div>No Recent Posts</div>
      )}

      {!localRecentPostsError && noOfPages ? (
        <div className="pagination self-center">
          <ul className="flex gap-4">
            <li>
              {currentPage !== undefined && (
                <button
                  className="flex gap-1 items-center bg-transparent rounded-md px-3 py-2 border border-[#C4C4C4] font-normal text-sm leading-4 text-[#666666]"
                  disabled={currentPage === 1}
                  onClick={() => {
                    getRecentPosts(currentPage - 1);
                  }}
                >
                  <IoIosArrowRoundBack /> Prev
                </button>
              )}
            </li>
            {Array.from({ length: noOfPages }, (_, i) => (
              <li key={`page${i + 1}`}>
                <button
                  className={` font-normal text-sm leading-4 rounded-md border px-3 py-2 ${
                    currentPage === i + 1
                      ? "bg-thickgreen text-white"
                      : "bg-transparent text-[#666666] border-[#C4C4C4]"
                  }`}
                  onClick={() => {
                    getRecentPosts(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              {currentPage !== undefined && (
                <button
                  className="bg-thickgreen flex gap-1 items-center px-3 py-2 font-normal text-sm leading-4 text-white rounded-md "
                  disabled={currentPage === noOfPages}
                  onClick={() => getRecentPosts(currentPage + 1)}
                >
                  Next <IoIosArrowRoundForward />
                </button>
              )}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Recentposts;
