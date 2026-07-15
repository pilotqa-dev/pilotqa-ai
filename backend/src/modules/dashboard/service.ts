import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardStats = async () => {
  const [
    projects,
    requirements,
    testCases,
    executions,
    passed,
    failed,
    openDefects,
  ] = await Promise.all([
    prisma.project.count(),

    prisma.requirement.count(),

    prisma.testCase.count(),

    prisma.testExecution.count(),

    prisma.testExecution.count({
      where: {
        status: "PASSED",
      },
    }),

    prisma.testExecution.count({
      where: {
        status: "FAILED",
      },
    }),

    prisma.defect.count({
      where: {
        status: {
          in: ["OPEN", "IN_PROGRESS", "REOPENED"],
        },
      },
    }),
  ]);

  return {
    projects,
    requirements,
    testCases,
    executions,
    passed,
    failed,
    openDefects,
  };
};