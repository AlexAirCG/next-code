import { CreateTodoForm } from "@/features/courses-list/pub/create-todo-form";
import { TodoList } from "@/features/courses-list/pub/todo-list";
import { TodoNav } from "@/features/courses-list/pub/todo-nav";

export default async function Home() {
  return (
    <div className="rounded border-2 p-2">
      <TodoNav />
      <div>
        <CreateTodoForm className="mb-4" revalidatePagePath="/" />
        <TodoList revalidatePagePath="/" />
      </div>
    </div>
  );
}
