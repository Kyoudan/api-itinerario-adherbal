/*
  Warnings:

  - You are about to drop the column `categoryId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the `postcategories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagCategoriesId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_categoryId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "categoryId",
ADD COLUMN     "tagCategoriesId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "postcategories";

-- CreateTable
CREATE TABLE "tagsCategories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tagsCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_tagCategoriesId_fkey" FOREIGN KEY ("tagCategoriesId") REFERENCES "tagsCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
