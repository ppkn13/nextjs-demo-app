"use client";
import { useRouter } from "next/navigation";

export function AddTodoForm() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get("title");
    const description = formData.get("description");
    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });
    router.refresh();
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="title" placeholder="title" />
      <textarea name="description" placeholder="description" />
      <button type="submit">追加</button>
    </form>
  );
}