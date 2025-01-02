import Image from "next/image";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import image_placeholder from "../../../assets/author_image_placeholder.png";
import Posts from "@/components/Posts";
import { Post } from "@/types/post.interface";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const urlParams = await params;
  let authorsPosts;
  try {
    const response = await fetch(
      `http://localhost:8080/api/posts/writer/${urlParams.id}`
    );
    authorsPosts = (await response.json()).posts;
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="bg-lightergreen px-[102px] py-20 flex gap-4">
        <Image src={image_placeholder} alt="posts image"></Image>
        <div className="flex flex-col gap-6 max-w-[665px]">
          <h1 className="font-semibold text-2xl">
            Hi! I&apos;m <span>Saimon Dasilva</span>
          </h1>
          <p>
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without 24/365
            catalysts for change. Completely streamline functionalized models
            and out-of-the-box functionalities. Authoritatively target proactive
            vortals vis-a-vis exceptional results. Compellingly brand emerging
            sources and compelling materials. Globally iterate parallel content
          </p>

          <div>
            <span className="font-medium text-[17px]">
              Follow on Social Media
            </span>
            <div className="flex items-center gap-4 mt-4 text-xl">
              <FaFacebook className="text-[#777777] hover:text-blue-600 cursor-pointer" />
              <FaXTwitter className="text-[#777777] hover:text-black  cursor-pointer" />
              <AiFillInstagram className="text-[#777777] hover:text-pink-500 cursor-pointer" />
              <FaPinterest className="text-[#777777] hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div  className="px-[102px] py-20">
        <h1 className="font-semibold text-xl  mb-14">
          <span className="bg-thickgreen text-white px-1">Read</span> Authors
          Blogs
        </h1>

        <div className="grid md:grid-cols-3 gap-x-7 gap-y-14">
          {authorsPosts && authorsPosts.map((post: Post) => (
            <Posts key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
