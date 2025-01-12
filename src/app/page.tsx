import { client } from "@/sanity/lib/client";
import Comment from "./Components/Comment";
import BlogCard from "./Components/BlogCard";
import Section from "./Components/Statement";

export const revalidate = 5;

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  summary,title,image,
    "slug":slug.current
}`;

  const posts: Post[] = await client.fetch(query);

  return (
    <div>
      <Section />
      <main className="flex min-h-screen flex-col">
        <section
          className="grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-3 gap-12">
        {
          posts.map((post:Post) => (
            <BlogCard post={post} key={post.slug} />
          ))
        }
      </section>
      <Comment />
      </main>
    </div>
  );
}
