import Post from "@/app/_components/Post/Post";
import { getArticle } from "@/app/_utils/mock_fn";

export default function PostSlugPage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug[0]);

  if (!article) {
    return (
      <>
        <div>페이지가 없어요</div>
      </>
    );
  }

  return (
    <>
      <Post
        title={article.title}
        tagList={article.tagList}
        createdAt={article.createdAt}
        body={article.body}
      />
    </>
  );
}
