import { Resolver, Query } from "type-graphql";
import { ResponseUser } from "./PostsSchema";
import PostController from "./PostController";

@Resolver()
class PostResolver {
  @Query(() => ResponseUser)
  async getPosts(): Promise<ResponseUser> {
    const result = await PostController.getPosts();
    if (!result) return { message: "Error", status: 500 };
    return { message: "Success", status: 200, data: result };
  }
}

export default PostResolver;
