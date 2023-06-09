import { Resolver, Query, Args } from "type-graphql";
import {
  ArgsGetAllPost,
  ArgsGetOnePost,
  ResponseGetAllPosts,
  ResponseGetOnePost,
} from "./PostsSchema";
import PostController from "./PostController";

@Resolver()
class PostResolver {
  @Query(() => ResponseGetAllPosts)
  async getAllPost(@Args() args: ArgsGetAllPost): Promise<ResponseGetAllPosts> {
    const result = await PostController.getAllPosts(args.limit, args.init);
    if (!result) return { message: "Error", status: 500 };
    return { message: "Success", status: 200, data: result };
  }

  @Query(() => ResponseGetOnePost)
  async getOnePost(@Args() args: ArgsGetOnePost): Promise<ResponseGetOnePost> {
    console.log(args);
    const result = await PostController.getOnePost(args.find);
    if (!result) return { message: "Error", status: 500 };
    return { message: "Success", status: 200, data: result };
  }
}

export default PostResolver;
