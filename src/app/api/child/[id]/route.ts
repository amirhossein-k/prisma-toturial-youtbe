import {NextResponse} from "next/server";
import prisma from "@/db/prismaDb";

export const DELETE = async (req: Request, route: {params: {id: string}}) => {
  const id = route.params.id;

  const deleteChild = await prisma.child.delete({
    where: {
      id,
    },
  });
  console.log(deleteChild);
  return NextResponse.json({message: "success delete"}, {status: 200});
};
