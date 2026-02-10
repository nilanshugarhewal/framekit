-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT,
    "information" TEXT NOT NULL,
    "socials" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
