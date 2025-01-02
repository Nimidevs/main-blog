import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Sidefeed from "@/components/Sidefeed";
import PostRead from "./Post-read";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let postId;
  let path;
  let post;
  try {
    const urlParams = await params;
    postId = urlParams.id;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      path = "/auth/login";
      return;
    }

    console.log("this is token", token);

    const response = await fetch(`http://localhost:8080/api/posts/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    post = (await response.json()).post;
    console.log(post);
  } catch (error) {
    console.log(error);
  } finally {
    if (path) {
      redirect(path);
    }
  }

  return (
    <div>
      <main className=" py-20 grid grid-cols-1 md:grid-cols-3 px-[120px] gap-14"
      >
        <div className="md:col-span-2 ">
          <PostRead post={post}/>
        </div>
        <div className="md:col-span-1 max-w-[361px]">
          <Sidefeed/>
        </div>
      </main>
    </div>
  );
}
