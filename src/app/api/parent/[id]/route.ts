import {NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const GET = async (req: Request, route: {params: {id: string}}) => {
  const id = route.params.id;

  const parant = await prisma.parent.findUnique({
    where: {id},
    include: {
      child: true,
    },
  });
  return NextResponse.json(parant);
};
