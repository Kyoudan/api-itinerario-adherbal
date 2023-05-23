import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

export async function DeletePostLikesController(req: Request, res: Response) {
  try {
    const { postId, userId } = req.body;

    if (!postId)
      return res.status(400).json({ message: "Post id is required" });
    if (!userId)
      return res.status(400).json({ message: "User id is required" });

    const findLikes = await prismaClient.posts.findUnique({
      where: {
        id: postId,
      },
      select: {
        likes: true,
      },
    });

    if (!findLikes) return res.status(400).json({ message: "Post not found" });

    await prismaClient.posts.update({
      where: {
        id: postId,
      },
      data: {
        likes: findLikes.likes - 1,
        PostLikes: {
          deleteMany: {
            AND: {
              PostsId: postId,
              UserId: userId,
            },
          },
        },
      },
    });

    res.status(200).json({ message: "Like retirado!!" });
  } catch {
    res.status(500).json({ message: "Error" });
  }
}

export default DeletePostLikesController;
