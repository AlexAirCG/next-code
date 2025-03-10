"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useTransition } from "react";

export function TodoItem({
  todo,
  onDelete,
}: {
  todo: TodoListElement;
  onDelete: () => Promise<void>;
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };
  return (
    <Card className="flex">
      <CardHeader>
        <CardTitle>{todo.text}</CardTitle>
      </CardHeader>

      <CardFooter>
        <Button
          className="py-1 px-2 ml-2 rounded border border-gray-500 hover:border-gray-300"
          disabled={isLoadingDelete}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
