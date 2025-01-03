import { prisma } from "@/prisma";
import Link from "next/link";

export default async function Todos() {
  const todos = await prisma.todo.findMany();
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <Link key={todo.id} href={`/todo/${todo.id}`}>{todo.title}</Link>
        ))}
      </ul>
    </>
  );
}
