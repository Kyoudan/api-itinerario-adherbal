import prismaClient from "../../database/prismaClient";

class PostController {
  async getPosts() {
    try {
      const result = await prismaClient.posts.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          finished: true,
          slug: true,
          author: true,
          isFixed: true,
          uuid: true,
          adminId: true,
          users: {
            select: {
              email: true,
              name: true,
            },
          },
          postTags: {
            select: {
              name: true,
            },
          },
          PostContent: {
            select: {
              id: true,
              content: true,
              order: true,
              reference: true,
              size: true,
              type: true,
            },
          },
        },
      });
      return result;
    } catch {
        return null;
    }
  }
}

export default new PostController();
