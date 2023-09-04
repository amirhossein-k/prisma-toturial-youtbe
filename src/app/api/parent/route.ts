import {NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export async function POST(req: Request) {
  const reqBody = await req.json();

  const {firstName, lastName, age} = reqBody;

  const parent = await prisma.parent.create({
    data: {
      firstName,
      lastName,
      age,
    },
  });

  return NextResponse.json(parent);
}
