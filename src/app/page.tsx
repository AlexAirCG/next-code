import { CreateTodoForm } from "@/features/courses-list/pub/create-todo-form";
import { TodoList } from "@/features/courses-list/pub/todo-list";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function Home() {
  return (
    <div className="p-2 m-2 flex justify-center">
      <div className="w-3xl border-2 p-2 rounded">
        <AppHeader />
        <CreateTodoForm className="mb-4" revalidatePagePath="/" />
        <TodoList revalidatePagePath="/" />
      </div>
    </div>
  );
}
