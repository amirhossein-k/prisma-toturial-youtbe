import {NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export async function POST(req: Request) {
  const reqBody = await req.json();

  const {firstName, parentId} = reqBody;

  const child = await prisma.child.create({
    data: {
      firstName,
      parentId,
    },
  });
  return NextResponse.json(child);
}

export const GET = async (req: Request) => {
  const children = await prisma.child.findMany({
    include: {
      parent: true,
    },
  });
  return NextResponse.json(children);
};
