import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Recentposts from "@/components/Recentposts";
import Sidefeed from "@/components/Sidefeed";

export default async function Home() {
  let trendingPosts;
  let featuredPosts;

  let trendingPostsError;
  let featuredPostsError;

  let recentPosts;
  let paginationMeta;
  let recentPostsError;

  try {
    const [trendingRes, featuredRes, recentRes] = await Promise.all([
      fetch(`http://localhost:8080/api/posts/trending`, { cache: "no-store" }),
      fetch(`http://localhost:8080/api/posts/featured`, { cache: "no-store" }),
      fetch(`http://localhost:8080/api/posts/recentposts?page=1&limit=10`),
    ]);

    if (trendingRes.ok) {
      const trendingData = await trendingRes.json();
      trendingPosts = trendingData.posts || [];
    } else {
      trendingPostsError = "Failed to fetch trending posts";
    }

    if (featuredRes.ok) {
      const featuredData = await featuredRes.json();
      featuredPosts = featuredData.posts || [];
    } else {
      featuredPostsError = "Failed to fetch featured posts";
    }

    if (recentRes.ok) {
      const recentData = await recentRes.json();
      recentPosts = recentData.posts;
      paginationMeta = recentData.pagination;
    } else {
      recentPostsError = "Failed to fetch recent posts";
    }
  } catch (error) {
    trendingPostsError = "Failed to fetch trending posts";
    featuredPostsError = "Failed to fetch featured posts";
    recentPostsError = "Failed to fetch recent posts";
    console.log(error);
  }

  const heroSectionProps = {
    ...(trendingPosts && { trendingPosts }),
    ...(featuredPosts && { featuredPosts }),
    ...(trendingPostsError && { trendingPostsError }),
    ...(featuredPostsError && { featuredPostsError }),
  };

  

  const recentPostProps = {
    ...(recentPosts && { recentPosts }),
    ...(paginationMeta && { paginationMeta }),
    ...(recentPostsError && { recentPostsError }),
  };



  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Herosection {...heroSectionProps} />
        <div className="px-[102] py-20 grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 ">
            <h1 className="font-semibold text-xl mb-14">
              <span className="bg-thickgreen text-white px-1">Recently</span>{" "}
              Posted
            </h1>
            <Recentposts {...recentPostProps} />
          </div>
          <div className="md:col-span-1 max-w-[361px]">
            <Sidefeed />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
