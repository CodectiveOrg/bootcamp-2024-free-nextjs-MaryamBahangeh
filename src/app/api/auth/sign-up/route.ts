import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

import { parseBody, wrapWithTryCatch } from "@/utils/api.utils";

import { ApiResponseType } from "@/types/api-response.type";
import { SignUpDto } from "@/dto/auth.dto";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignUpDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError, status: 400 });
    }
    await prisma.user.create({ data: body });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
