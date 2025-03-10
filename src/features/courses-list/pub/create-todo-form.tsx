"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createTodoAction } from "../action";
import { cn } from "@/lib/utils";

const createCourseFormShema = z.object({
  text: z.string(),
});

export function CreateTodoForm({
  className,
  revalidatePagePath,
}: {
  className: string;
  revalidatePagePath: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createCourseFormShema),
    defaultValues: {
      text: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createTodoAction(data, revalidatePagePath);
          });
        })}
        className={cn(className, "")}
      >
        <div className="flex justify-between">
          <div className="w-full">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="задача" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button
              className="py-1 px-2 ml-2 rounded border border-gray-500 hover:border-gray-300"
              type="submit"
              disabled={isCreateTransition}
            >
              Добавить
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
