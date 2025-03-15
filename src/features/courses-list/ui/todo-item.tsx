"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useTransition } from "react";
import { MdDeleteForever } from "react-icons/md";

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

  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className={`flex items-center border rounded p-1 mb-3 ${isChecked ? "opacity-40 text-green-500" : ""}`}
    >
      <div className="flex">
        <Checkbox
          checked={isChecked}
          onClick={checkHandler}
          className={`w-6 h-6 rounded-full`}
        />
        <div
          className={`flex items-center ml-2 ${isChecked ? "line-through" : ""}`}
        >
          {todo.text}
        </div>
      </div>
      <Button
        className="py-1 px-2 ml-auto "
        disabled={isLoadingDelete}
        onClick={handleDelete}
      >
        <MdDeleteForever className="size-6 hover:text-red-500" />
      </Button>
    </div>
  );
}
