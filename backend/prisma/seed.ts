import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("Admin123", 10);

  const organization = await prisma.organization.upsert({
    where: {
      code: "PILOTQA",
    },
    update: {},
    create: {
      name: "PilotQA AI",
      code: "PILOTQA",
      description: "Default Organization",
    },
  });

  await prisma.user.upsert({
    where: {
      email: "admin@pilotqa.ai",
    },
    update: {},
    create: {
      firstName: "Super",
      lastName: "Admin",
      email: "admin@pilotqa.ai",
      phoneNumber: "9999999999",
      password,
      role: UserRole.SUPER_ADMIN,
      organizationId: organization.id,
      isActive: true,
    },
  });

  console.log("✅ Super Admin Created");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });