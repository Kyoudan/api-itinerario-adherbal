/*
  Warnings:

  - You are about to drop the column `userId` on the `posts` table. All the data in the column will be lost.
  - Added the required column `order` to the `postcontent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userId_fkey";

-- AlterTable
ALTER TABLE "postcontent" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "userId",
ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "recoverpasswords" ADD COLUMN     "adminId" INTEGER,
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recoverpasswords" ADD CONSTRAINT "recoverpasswords_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE CASCADE ON UPDATE CASCADE;
