-- CreateEnum
CREATE TYPE "public"."DefectPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "public"."DefectSeverity" AS ENUM ('MINOR', 'MAJOR', 'CRITICAL', 'BLOCKER');

-- CreateEnum
CREATE TYPE "public"."DefectStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED', 'REOPENED');

-- CreateTable
CREATE TABLE "public"."Defect" (
    "id" TEXT NOT NULL,
    "defectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "priority" "public"."DefectPriority" NOT NULL DEFAULT 'MEDIUM',
    "severity" "public"."DefectSeverity" NOT NULL DEFAULT 'MAJOR',
    "status" "public"."DefectStatus" NOT NULL DEFAULT 'OPEN',
    "environment" TEXT,
    "executionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Defect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Defect_defectId_key" ON "public"."Defect"("defectId");

-- AddForeignKey
ALTER TABLE "public"."Defect" ADD CONSTRAINT "Defect_executionId_fkey" FOREIGN KEY ("executionId") REFERENCES "public"."TestExecution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
