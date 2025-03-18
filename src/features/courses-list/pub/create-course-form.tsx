"use client";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createCourseAction } from "../action";

const createCourseFormShema = z.object({
  name: z.string(),
  description: z.string(),
});

export function CreateCourseForm({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(createCourseFormShema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCourseAction(data, revalidatePagePath);
          });
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="название" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </Form>
  );
}
