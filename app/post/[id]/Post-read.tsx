import Image from "next/image";
import { Post } from "@/types/post.interface";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLinkOutline } from "react-icons/io5";
import avatar from "../../../assets/avatar.png";
import Posts from "@/components/Posts";

const PostRead = async ({ post }: { post: Post }) => {
  let similarPosts;
  try {
    const response = await fetch(
      `http://localhost:8080/api/posts/category/${post.categories[0]._id}`
    );
    similarPosts = (await response.json()).posts;
  } catch (error) {
    console.log(error);
  }

  console.log(post.categories, post.author);

  const PostConverter = new QuillDeltaToHtmlConverter(
    JSON.parse(post.post).ops
  );
  const titleConverter = new QuillDeltaToHtmlConverter(
    JSON.parse(post.title).ops
  );

  const localPost = PostConverter.convert();
  const title = titleConverter.convert();

  return (
    <div className="max-w-4xl">
      <div className="flex flex-col gap-3">
        <div>
          <span className="bg-lightergreen py-1 px-2 rounded text-[#666666] font-normal text-xs leading-3">
            {post?.categories[0].name}
          </span>
          <h1
            className="title font-semibold text-2xl text-[#222222] mt-3"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>

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
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: localPost }}
        className="mt-7"
      ></div>

      <div className="flex items-center justify-center gap-4 my-4">
        <div className="flex-1 border-t border-[#D1E7E5]"></div>

        <IoLinkOutline className="text-[#999999] hover:text-gray-600 cursor-pointer" />
        <FaFacebook className="text-[#999999] hover:text-blue-600 cursor-pointer" />
        <FaXTwitter className="text-[#999999] hover:text-black  cursor-pointer" />
        <AiFillInstagram className="text-[#999999] hover:text-pink-500 cursor-pointer" />
        <FaPinterest className="text-[#999999] hover:text-red-500 cursor-pointer" />

        <div className="flex-1 border-t border-[#D1E7E5]"></div>
      </div>
      {similarPosts && similarPosts.length > 0 && (
        <div>
          <h1 className="font-semibold text-xl ">
            <span className="bg-thickgreen text-white px-1">See Related</span>{" "}
            Posts
          </h1>

          <div className="flex gap-7 mt-14">
            {similarPosts.slice(0, 2).map((post: Post) => (
              <Posts key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostRead;
