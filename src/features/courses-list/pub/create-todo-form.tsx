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
import { MdLibraryAdd } from "react-icons/md";

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
        <div className="flex max-w-[400px] ">
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

          <Button type="submit" disabled={isCreateTransition}>
            <MdLibraryAdd className="size-8 hover:text-green-500 ml-2" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
