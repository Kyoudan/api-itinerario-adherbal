import { Resolver, Query } from "type-graphql";

@Resolver()
class PostResolver {
  @Query(() => String)
  async getPosts() {
    return "Hello World";
  }
}

export default PostResolver;
