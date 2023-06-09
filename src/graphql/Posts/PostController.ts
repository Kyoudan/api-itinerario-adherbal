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
    const verifyType = z
      .union([z.string(), z.string().uuid()])
      .safeParse(arg).success;
    const numberType = typeof arg === "string" ? parseInt(arg) : arg;
    const number = z.number().safeParse(numberType).success;

    if (!verifyType) return null;

    let find = number ? numberType : arg;

    try {
      const result = await prismaClient.posts.findFirst({
        where: {
          OR: [
            {
              id: typeof find === "number" ? find : undefined,
            },
            {
              slug: {
                contains:
                  typeof find === "string"
                    ? find.toLowerCase().replace(/ /g, "-")
                    : undefined,
              },
            },
            {
              uuid: {
                contains: typeof find === "string" ? find : undefined,
              },
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
