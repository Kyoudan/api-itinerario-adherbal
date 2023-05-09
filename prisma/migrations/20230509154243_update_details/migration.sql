/*
  Warnings:

  - Added the required column `author` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "postcontent" ADD COLUMN     "size" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "slug" VARCHAR(255) NOT NULL;
