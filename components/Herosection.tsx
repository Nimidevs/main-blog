"use client";
import { useState, useEffect } from "react";
import { Featuredposts, TrendingPosts } from "./Posts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Post } from "@/types/post.interface";
import Link from "next/link";

interface heroSectionPropTypes {
  featuredPosts?: Post[];
  trendingPosts?: Post[];
  featuredPostsError?: string;
  trendingPostsError?: string;
}

const Herosection: React.FC<heroSectionPropTypes> = ({
  featuredPosts,
  trendingPosts,
  featuredPostsError,
  trendingPostsError,
}) => {
  const [localFeaturedPosts, setLocalFeaturedPosts] = useState(featuredPosts);
  const [localTrendingPosts, setLocalTrendingPosts] = useState<Post[][]>();
  const [localFeaturedPostsError, setLocalFeaturedPostsError] =
    useState(featuredPostsError);
  const [localTrendingPostsError, setLocalTrendingPostsError] =
    useState(trendingPostsError);

  function createTrendingPostsPair(initialtrendingArray: Post[]) {
    const trendingPostsPair = [];
    for (let i = 0; i < initialtrendingArray.length; i += 2) {
      const pair = [initialtrendingArray[i]];
      if (initialtrendingArray[i + 1] !== undefined) {
        pair.push(initialtrendingArray[i + 1]);
      }
      trendingPostsPair.push(pair);
    }
    return trendingPostsPair;
  }

  useEffect(() => {
    if (trendingPosts) {
      const trendingPair = createTrendingPostsPair(trendingPosts);
      setLocalTrendingPosts(trendingPair);
    }
  }, [trendingPosts]);

  const refetchfeaturedPosts = async () => {
    try {
      const featuredRes = await fetch(
        "http://localhost:8080/api/posts/featured"
      );
      if (!featuredRes.ok) {
        throw new Error("failed to fetch featured posts");
      }
      const featuredData = await featuredRes.json();

      setLocalFeaturedPosts(featuredData.posts);
      setLocalFeaturedPostsError(undefined);
    } catch (error) {
      setLocalFeaturedPostsError(
        "failed to fetch featured posts, Try again later"
      );
      console.log(error);
    }
  };

  const refetchTrendingPosts = async () => {
    try {
      const trendingRes = await fetch(
        "http://localhost:8080/api/posts/trending"
      );
      if (!trendingRes.ok) {
        throw new Error("failed to fetch trending posts");
      }
      const trendingData = await trendingRes.json();

      const trendingPair = createTrendingPostsPair(trendingData.posts);

      setLocalTrendingPosts(trendingPair);
      setLocalTrendingPostsError(undefined);
    } catch (error) {
      setLocalTrendingPostsError(
        "failed to fetch trending posts, Try again later"
      );
      console.log(error);
    }
  };

  return (
    <div className="bg-lightergreen px-[102px] py-20 grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div className="flex flex-col gap-10 md:col-span-2">
        <h1 className="font-semibold text-xl ">
          <span className="bg-thickgreen text-white px-1">Featured</span> This
          Month
        </h1>
        <div className="flex gap-7 border-r border-gray-300 pr-6">
          {localFeaturedPostsError ? (
            <div>
              Failed to fetch posts
              <button onClick={refetchfeaturedPosts}>Retry</button>
            </div>
          ) : localFeaturedPosts && localFeaturedPosts.length > 0 ? (
            localFeaturedPosts?.map((post) => (
              <Link href={`/post/${post._id}`} key={post._id}>
                <Featuredposts post={post} />
              </Link>
            ))
          ) : (
            <div>No Featured Posts </div>
          )}
        </div>
      </div>
      <div className="md:col-span-1 flex flex-col gap-8">
        <h1 className="font-semibold text-xl ">
          <span className="bg-thickgreen text-white px-1">Trending</span> Now!
        </h1>
        {localTrendingPostsError ? (
          <div>
            Failed to fetch posts
            <button onClick={refetchTrendingPosts}>Retry</button>
          </div>
        ) : localTrendingPosts && localTrendingPosts.length > 0 ? (
          <Swiper
            direction="horizontal"
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full min-h-[400px]"
          >
            {localTrendingPosts.map((postPair, index) => (
              <SwiperSlide key={`slide${index}`}>
                <div className="flex flex-col gap-7">
                  {postPair.map((post) => (
                    <Link href={`/post/${post._id}`} key={post._id}>
                      <TrendingPosts post={post} />
                    </Link>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>No Trending Posts</div>
        )}
      </div>
    </div>
  );
};

export default Herosection;
