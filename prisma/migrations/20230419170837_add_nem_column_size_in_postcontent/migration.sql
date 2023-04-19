/*
  Warnings:

  - Added the required column `size` to the `postcontent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "postcontent" ADD COLUMN     "size" INTEGER NOT NULL;
