import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { parseBody, setAuthCookie, wrapWithTryCatch } from "@/utils/api.utils";

import { ApiResponseType } from "@/types/api-response.type";
import { SignUpDto } from "@/dto/auth.dto";
import { hashPassword } from "@/utils/bcrypt.utils";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignUpDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    let foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (foundUser) {
      return NextResponse.json(
        {
          error: "This username is already taken.",
        },
        { status: 400 },
      );
    }

    foundUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (foundUser) {
      return NextResponse.json(
        {
          error: "This email is already taken.",
        },
        { status: 400 },
      );
    }

    const hashedPassword = await hashPassword(body.password);
    await prisma.user.create({ data: { ...body, password: hashedPassword } });

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
