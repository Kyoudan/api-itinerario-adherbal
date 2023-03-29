/*
  Warnings:

  - You are about to drop the `postTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_postTagsId_fkey";

-- DropTable
DROP TABLE "postTags";

-- CreateTable
CREATE TABLE "posttags" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posttags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postcontenttype" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postcontenttype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postcontent" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "PostContentTypeId" INTEGER NOT NULL,

    CONSTRAINT "postcontent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "postcontent" ADD CONSTRAINT "postcontent_PostContentTypeId_fkey" FOREIGN KEY ("PostContentTypeId") REFERENCES "postcontenttype"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_postTagsId_fkey" FOREIGN KEY ("postTagsId") REFERENCES "posttags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
