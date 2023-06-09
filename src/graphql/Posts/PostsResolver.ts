import { Resolver, Query, Arg } from "type-graphql";
import { PostInput, ResponseGetAllPosts, ResponseGetOnePost } from "./PostsSchema";
import PostController from "./PostController";

@Resolver()
class PostResolver {
  @Query(() => ResponseGetAllPosts)
  async getAllPosts(): Promise<ResponseGetAllPosts> {
    const result = await PostController.getAllPosts();
    if (!result) return { message: "Error", status: 500 };
    return { message: "Success", status: 200, data: result };
  }

  @Query(() => ResponseGetOnePost)
  async getOnePost(@Arg("input") postInput: PostInput): Promise<ResponseGetOnePost> {
    const result = await PostController.getOnePost(postInput.find);
    if (!result) return { message: "Error", status: 500 };
    return { message: "Success", status: 200, data: result };
  }
}

export default PostResolver;
