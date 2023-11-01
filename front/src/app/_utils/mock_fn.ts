import { mock_articles } from "./MockArticles";
import { TagType } from "types/post";

export const getAllPosts = () => {
  const author = {
    username: "JEON TAEHEON",
    bio: "",
    image: "https://api.realworld.io/images/demo-avatar.png",
  };
  const allPosts = mock_articles.articles.map(({ author, ...rest }) => {
    return {
      id: Math.random() * 100,
      ...rest,
      articleImage: "/image/mock_image.jpeg",
    };
  });

  return { allPosts, author };
};

export const getAllTags = (): TagType[] => {
  const allTagsMap = new Map();

  mock_articles.articles.forEach((article) => {
    const tagLists = article.tagList;

    tagLists.forEach((tag) => {
      allTagsMap.set(tag, allTagsMap.get(tag) + 1 || 1);
    });
  });

  return [...allTagsMap.entries()].map(([tag, count]) => ({ tag, count }));
};

export const getArticle = (slug: string) => {
  return mock_articles.articles.find((article) => article.slug === slug);
};
