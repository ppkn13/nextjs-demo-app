import { prisma } from "@/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Todo({ params }: { params: { id: string } }) {
  const { id } = params;
  const todo = await prisma.todo.findUnique({ where: { id: parseInt(id) } });
  if (!todo) {
    notFound();
  }
  return (
    <>
      <h1>Todo detail</h1>
      <p>id: {id}</p>
      <p>title: {todo.title}</p>
      <p>description: {todo.description}</p>
      <Link href="/todo">戻る</Link>
    </>
  );
}