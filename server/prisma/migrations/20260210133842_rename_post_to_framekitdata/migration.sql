/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "framekitdata" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT,
    "information" TEXT NOT NULL,
    "socials" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "framekitdata_pkey" PRIMARY KEY ("id")
);
