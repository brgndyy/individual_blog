declare module "types/post" {
  export interface AuthorType {
    username: string;
    bio: string;
    image: string;
  }

  export interface PostType {
    id: number;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    articleImage: string;
  }

  export interface PostListType {
    allPosts: PostType[];
  }

  export interface TagType {
    tag: string;
    count: number;
  }

  export interface AllTagsType {
    allTags: TagType[];
  }
}
