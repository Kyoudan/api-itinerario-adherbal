/*
  Warnings:

  - You are about to drop the `FeaturedPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FeaturedPosts" DROP CONSTRAINT "FeaturedPosts_PostId_fkey";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "isFixed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "FeaturedPosts";
