import { AddTodoForm } from "./components/addTodoForm";
import { TodoList } from "./components/todoList";

export default async function Todos() {
  return (
    <>
      <h1>Todos</h1>
      <AddTodoForm />
      <TodoList />
    </>
  );
}
