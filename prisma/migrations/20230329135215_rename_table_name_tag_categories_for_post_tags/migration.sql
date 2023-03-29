/*
  Warnings:

  - You are about to drop the column `tagCategoriesId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `tagsCategories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `postTagsId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_tagCategoriesId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "tagCategoriesId",
ADD COLUMN     "postTagsId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "tagsCategories";

-- CreateTable
CREATE TABLE "postTags" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postTags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_postTagsId_fkey" FOREIGN KEY ("postTagsId") REFERENCES "postTags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
