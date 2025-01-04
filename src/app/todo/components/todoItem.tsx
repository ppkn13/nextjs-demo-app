"use client";
import { Todo } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function TodoItem({data}: {data: Todo}) {
  const router = useRouter();

  const handleDone = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await fetch(`/api/todo/${data.id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: e.target.checked }),
    });
    router.refresh();
  }

  return (
    <li key={data.id}>
      <Link key={data.id} href={`/todo/${data.id}`}>{data.title}</Link>
      <input type="checkbox" checked={data.status} onChange={(e) => handleDone(e)} />
    </li>
  );
}