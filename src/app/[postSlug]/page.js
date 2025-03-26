import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";

import { BLOG_TITLE } from "@/constants";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./postSlug.module.css";

export async function generateMetadata({ params }) {
  const post = await loadBlogPost(params.postSlug);

  return {
    title: `${post.frontmatter.title} • ${BLOG_TITLE}`,
    description: post.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const post = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

export default BlogPost;
