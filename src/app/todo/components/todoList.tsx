import { prisma } from "@/prisma";
import Link from "next/link";

export async function TodoList() {
  const todos = await prisma.todo.findMany();
  return (
    <ul>
    {todos.map((todo) => (
      <Link key={todo.id} href={`/todo/${todo.id}`}>{todo.title}</Link>
    ))}
  </ul>
  )

}