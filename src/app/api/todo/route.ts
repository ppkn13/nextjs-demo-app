import { prisma } from "@/prisma";

export async function POST(request: Request) {
  const req = await request.json()
  const todo = await prisma.todo.create({
    data: { title: req.title, description: req.description }
  })
  return Response.json(todo)
}