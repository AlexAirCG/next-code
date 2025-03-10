import { revalidatePath } from "next/cache";
import { deleteTodoElement, getTodoList } from "../courses.repository";
import { TodoItem } from "../ui/todo-item";

export async function TodoList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const todoList = await getTodoList();

  const handleDeleteAction = async (todoId: string) => {
    "use server";

    await deleteTodoElement({ id: todoId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteAction.bind(null, todo.id)}
        />
      ))}
    </div>
  );
}
