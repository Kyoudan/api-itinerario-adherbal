import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

export async function CreatePostLikesController(req: Request, res: Response) {
  try {
    const { postId, userId } = req.body;

    if (!postId)
      return res.status(400).json({ message: "Post id is required" });
    if (!userId)
      return res.status(400).json({ message: "User id is required" });

    const verifyLike = await prismaClient.postLikes.count({
      where: {
        PostsId: postId,
        UserId: userId,
      },
    });

    if (verifyLike)
      return res.status(400).json({ message: "Like already exists" });

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
        likes: findLikes.likes + 1,
        PostLikes: {
          create: {
            UserId: userId,
          },
        },
      },
    });

    res.status(201).json({ message: "Like cadastrado!!" });
  } catch {
    res.status(500).json({ message: "Error" });
  }
}

export default CreatePostLikesController;
