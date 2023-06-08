/*
  Warnings:

  - You are about to drop the column `likes` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `PostLikes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `activateaccounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recoverpasswords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostLikes" DROP CONSTRAINT "PostLikes_PostsId_fkey";

-- DropForeignKey
ALTER TABLE "PostLikes" DROP CONSTRAINT "PostLikes_UserId_fkey";

-- DropForeignKey
ALTER TABLE "activateaccounts" DROP CONSTRAINT "activateaccounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "recoverpasswords" DROP CONSTRAINT "recoverpasswords_adminId_fkey";

-- DropForeignKey
ALTER TABLE "recoverpasswords" DROP CONSTRAINT "recoverpasswords_userId_fkey";

-- AlterTable
ALTER TABLE "postcontent" ADD COLUMN     "reference" TEXT;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "likes";

-- DropTable
DROP TABLE "PostLikes";

-- DropTable
DROP TABLE "activateaccounts";

-- DropTable
DROP TABLE "recoverpasswords";

-- DropTable
DROP TABLE "users";
