import Post from "./_components/Post/Post";
import { getAllPosts, getAllTags } from "./_utils/mock_fn";
import PostList from "./_components/Post/PostList";
import AllTags from "./_components/Tag/AllTags";
import AllPostCard from "./_components/composables/Card/AllPostCard";

export default function Home() {
  const { allPosts, author } = getAllPosts();
  const allTags = getAllTags();

  return (
    <>
      <AllPostCard>
        <AllTags allTags={allTags} />
        <PostList allPosts={allPosts} />
      </AllPostCard>
    </>
  );
}
