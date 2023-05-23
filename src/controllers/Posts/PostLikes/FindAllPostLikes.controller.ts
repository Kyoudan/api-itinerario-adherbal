import prismaClient from "../../../database/prismaClient";
import { Request, Response } from "express";

export async function FindAllPostLikesController(req: Request, res: Response) {
  try {
    const { postId } = req.params;

    if (!postId)
      return res.status(400).json({ message: "Post id is required" });

    const id = parseInt(postId);

    if (isNaN(id))
      return res.status(400).json({ message: "Post id is not a number" });

    const findLikes = await prismaClient.postLikes.findMany({
      where: {
        PostsId: id,
      },
    });

    res.status(200).json(findLikes);
  } catch {
    res.status(500).json({ message: "Error" });
  }
}

export default FindAllPostLikesController;
