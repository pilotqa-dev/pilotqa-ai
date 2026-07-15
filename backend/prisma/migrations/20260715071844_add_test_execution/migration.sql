-- CreateEnum
CREATE TYPE "public"."ExecutionStatus" AS ENUM ('NOT_STARTED', 'PASSED', 'FAILED', 'BLOCKED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "public"."ExecutionPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateTable
CREATE TABLE "public"."TestExecution" (
    "id" TEXT NOT NULL,
    "executionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "public"."ExecutionStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "priority" "public"."ExecutionPriority" NOT NULL DEFAULT 'MEDIUM',
    "comments" TEXT,
    "testCaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestExecution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestExecution_executionId_key" ON "public"."TestExecution"("executionId");

-- AddForeignKey
ALTER TABLE "public"."TestExecution" ADD CONSTRAINT "TestExecution_testCaseId_fkey" FOREIGN KEY ("testCaseId") REFERENCES "public"."TestCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
