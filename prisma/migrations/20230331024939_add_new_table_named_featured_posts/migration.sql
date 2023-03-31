-- CreateTable
CREATE TABLE "FeaturedPosts" (
    "id" SERIAL NOT NULL,
    "PostId" INTEGER NOT NULL,

    CONSTRAINT "FeaturedPosts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeaturedPosts" ADD CONSTRAINT "FeaturedPosts_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
