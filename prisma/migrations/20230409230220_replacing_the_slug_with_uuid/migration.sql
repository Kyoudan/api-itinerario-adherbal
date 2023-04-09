/*
  Warnings:

  - You are about to drop the column `slug` on the `posts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `posts` will be added. If there are existing duplicate values, this will fail.
  - The required column `uuid` was added to the `posts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "posts_slug_key";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "slug",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "uuid" TEXT NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX "posts_uuid_key" ON "posts"("uuid");
