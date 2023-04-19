/*
  Warnings:

  - You are about to drop the column `PostContentTypeId` on the `postcontent` table. All the data in the column will be lost.
  - You are about to drop the `postcontenttype` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `postcontent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "postcontent" DROP CONSTRAINT "postcontent_PostContentTypeId_fkey";

-- AlterTable
ALTER TABLE "postcontent" DROP COLUMN "PostContentTypeId",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "postcontenttype";
