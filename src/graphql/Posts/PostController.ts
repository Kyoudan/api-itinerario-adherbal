import prismaClient from "../../database/prismaClient";
import { z } from "zod";

class PostController {
  async getAllPosts() {
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

  async getOnePost(arg: number | string) {
    const string = z.string().safeParse(arg).success;
    const uuid = z.string().uuid().safeParse(arg).success;
    const number = z
      .number()
      .safeParse(typeof arg === "string" ? parseInt(arg) : arg).success;

    if (!string && !uuid && !number) return null;

    let find = arg; 

    try {
      const result = await prismaClient.posts.findFirst({
        where: {
          OR: [
            {
              id: typeof find === "number" ? find : undefined,
            },
            {
              slug: typeof find === "string" ? find : undefined,
            },
            {
              uuid: typeof find === "string" ? find : undefined,
            },
          ],
        },
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
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new PostController();
