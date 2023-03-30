/*
  Warnings:

  - Added the required column `PostsId` to the `postcontent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "postcontent" ADD COLUMN     "PostsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "postcontent" ADD CONSTRAINT "postcontent_PostsId_fkey" FOREIGN KEY ("PostsId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
