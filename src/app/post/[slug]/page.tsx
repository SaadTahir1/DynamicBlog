import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "next-sanity";

export const revalidate = 5;

export async function generateStaticParams() {
  const query = `*[_type== ' post '] {
    "slug": slug.current 
    }`;

  const slugs = await client.fetch(query);

  return slugs.map((item: any) => ({ slug: item.slug }));
}

export default async function Page({ params }: { params: any }) {
  const { slug } = params;

  const query = `*[_type== 'post' && slug.current == "${slug}"]{
    title , summary , image , content 
    }[0]`;

  try {
    const post = await client.fetch(query);

    if (!post) {
      return <div> Post not found! </div>;
    }
    return (
      <article
        className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col
            gap-y-8"
      >
        <h1
          className="text-xl xs:text-3xl lg:text-5xl font-bold 
                text-dark dark:text-light"
        >
          {post.title}
        </h1>

        <Image
          src={urlForImage(post.image)}
          alt={"Blog image"}
          width={450}
          height={450}
          className="rounded"
        />

        <section>
          <h2
            className="text-xl xs:text-2xl md:text-3xl font border
                uppercase text-accentDarkPrimary"
          >
            Summary
          </h2>
          <p
            className="text-base md:text-xl leading-relaxed
                text-justify text-dark/80 dark:text-light/80"
          >
            {post.summary}
          </p>
        </section>

        <section
          className="text-lg leading-normal text-dark/80 dark:text-light/80
            prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
            prose-li:list-disc prose-li:list-inside
            prose-li:marker:text-accentDarkSecondary
            prose-strong:text-dark dark:prose-strong:text-white"
        >
          <PortableText value={post.content} />
        </section>
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>;
  }
}
