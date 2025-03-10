"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository, createTodoElement } from "./courses.repository";

 
export const createCourseAction = async (
    command: CreateCourseListElementCommand,
    revalidatePagePath: string,
) => {
    await coursesRepository.createCourseElement(command);
    revalidatePath(revalidatePagePath);
}

export const createTodoAction = async (
    command: CreateTodoListElementCommand,
    revalidatePagePath: string,
) => {
    await createTodoElement(command);
    revalidatePath(revalidatePagePath);
}