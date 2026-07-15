-- CreateEnum
CREATE TYPE "public"."RequirementPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateTable
CREATE TABLE "public"."Requirement" (
    "id" TEXT NOT NULL,
    "requirementId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "priority" "public"."RequirementPriority" NOT NULL DEFAULT 'MEDIUM',
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Requirement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Requirement_requirementId_key" ON "public"."Requirement"("requirementId");

-- AddForeignKey
ALTER TABLE "public"."Requirement" ADD CONSTRAINT "Requirement_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
