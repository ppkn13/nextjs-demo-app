import { prisma } from "@/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const req = await request.json()
  const id = (await params).id
  const todo = await prisma.todo.update({
    where: { id: parseInt(id) },
    data: { status: req.status }
  })
  return Response.json(todo)
}