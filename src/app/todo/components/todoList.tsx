import { prisma } from "@/prisma";
import { TodoItem } from "./todoItem";

export async function TodoList() {
  const todos = await prisma.todo.findMany();
  return (
    <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} data={todo} />
    ))}
    </ul>
  )

}