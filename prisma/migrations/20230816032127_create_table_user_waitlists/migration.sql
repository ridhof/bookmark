-- CreateTable
CREATE TABLE "UserWaitlists" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWaitlists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserWaitlists_email_key" ON "UserWaitlists"("email");
