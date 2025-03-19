import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";

async function PostList() {
  const posts = await getBlogPostList();

  return (
    <>
      {posts.map((post) => (
        <BlogSummaryCard key={post.slug} {...post} />
      ))}
    </>
  );
}

export default PostList;
