import Image from "next/image";
import avatar from "../assets/avatar.png";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Post } from "@/types/post.interface";
import image_placeholder from "../assets/post_image_placeholder.png";
import large_image_placeholder from "../assets/post_image_large_placeholder.png";
import larger_image_placeholder from "../assets/post_image_larger_placeholder.png";
import Link from "next/link";

interface PostsProp {
  post?: Post;
  recent?: boolean;
}

const Posts = ({ post, recent }: PostsProp) => {
  return (
    <Link href={`/post/${post?._id}`}>
      <div className={`flex ${recent ? "gap-9" : "flex-col gap-8"}`}>
        <Image
          src={recent ? image_placeholder : larger_image_placeholder}
          alt="posts image"
        />

        <div className="flex flex-col gap-4">
          <div>
            <span className="bg-lightergreen py-1 px-2 rounded text-[#666666] font-normal text-xs leading-3">
              {post?.categories[0].name}
            </span>
            <h1 className="title h-16 font-semibold text-2xl text-[#222222] mt-2 max-w-[401px]">
              {post?.title_preview}
            </h1>
          </div>

          <div className="flex flex-col gap-4 max-w-[401px]">
            <div className="post-meta flex items-center font-normal text-xs leading-3 text-[#777777] gap-2">
              <span className="flex items-center gap-1">
                <Image src={avatar} alt="author's image"></Image>

                <span>
                  {post?.author.first_name} {post?.author.last_name}
                </span>
              </span>
              <span className="veritcal-line w-[1px] h-5 bg-[#999999]"></span>
              <span className="flex items-center gap-1">
                <IoCalendarClearOutline className="" />
                <span>
                  {post?.created_at &&
                    new Date(post?.created_at).toLocaleDateString("en-gb", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </span>
              </span>
              <span className="veritcal-line w-[1px] h-5 bg-[#999999]"></span>
              <span className="flex items-center gap-1">
                <FaRegClock />
                <span>3 min. To read</span>
              </span>
            </div>
            <p className="description font-normal text-[15px] leading-[22.5px] text-[#555555] max-w-[401px]">
              {post?.subtitle_preview}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Featuredposts = ({ post }: PostsProp) => {
  return (
    <Link href={`/post/${post?._id}`}>
      <div className="flex flex-col gap-6">
        <div>
          <span className="bg-[#DFF1F0] py-1 px-2 rounded text-[#666666] font-normal text-xs leading-3">
            {post?.categories[0].name}
          </span>
          <h1 className="title h-16 font-semibold text-2xl text-[#222222] max-w-[334px] mt-2">
            {post?.title_preview}
          </h1>
        </div>
        <Image src={large_image_placeholder} alt="posts image" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center font-normal text-xs leading-3 text-[#777777] gap-2">
            <span className="flex items-center gap-1">
              <Image src={avatar} alt="author's image"></Image>

              <span>
                {post?.author.first_name} {post?.author.last_name}
              </span>
            </span>
            <span className="veritcal-line w-[1px] h-5 bg-[#999999]"></span>
            <span className="flex items-center gap-1">
              <IoCalendarClearOutline className="" />
              <span>
                {post?.created_at &&
                  new Date(post?.created_at).toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </span>
            </span>
            <span className="veritcal-line w-[1px] h-5 bg-[#999999]"></span>
            <span className="flex items-center gap-1">
              <FaRegClock />
              <span>3 min. To read</span>
            </span>
          </div>
          <p className="description font-normal text-[15px] leading-[22.5px] text-[#555555] max-w-[401px]">
            {post?.subtitle_preview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const TrendingPosts = ({ post }: PostsProp) => {
  return (
    <Link href={`/post/${post?._id}`}>
      <div className="bg-white rounded-lg max py-6 px-6">
        <span className="bg-[#DFF1F0] py-1 px-2 rounded text-[#666666] font-normal text-xs leading-3">
          {post?.categories[0].name}
        </span>
        <h5 className="font-medium text-[17px] text-[#222222] leading-[25.5px] max-w-[311px] my-3">
          {post?.title_preview}
        </h5>
        <div className="flex items-center font-normal text-xs leading-3 text-[#777777] gap-2">
          <span className="flex items-center gap-1">
            <Image src={avatar} alt="author's image"></Image>

            <span>
              {post?.author.first_name} {post?.author.last_name}
            </span>
          </span>
          <span className="veritcal-line w-[1px] h-5 bg-[#999999]"></span>
          <span className="flex items-center gap-1">
            <FaRegClock />
            <span>3 min. To read</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
