import { PrismaClient, Prisma } from "@prisma/client";
import { hashPassword } from "@/utils/bcrypt.utils";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "Maryam Bahangeh",
    username: "maryambahangeh",
    email: "maryam@bahangeh.com",
    password: "1234",
  },
];

export async function main() {
  for (const user of users) {
    const hashedPassword = await hashPassword(user.password);
    await prisma.user.create({ data: { ...user, password: hashedPassword } });
  }
}

main().then(() => console.log("Done!"));
