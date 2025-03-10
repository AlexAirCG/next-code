import { dbClient } from "@/lib/db";
import { cache } from "react";

class CoursesRepository {
    getCoursesList = cache((): Promise<CourseListElement[]> => dbClient.course.findMany());

    createCourseElement = (command: CreateCourseListElementCommand): Promise<CourseListElement> => {
        return dbClient.course.create({
            data: command,
        })
    };

    deleteCourseElement = (command: DeleteCourseListElementCommand) => {
        return dbClient.course.delete({
            where: {id: command.id},
        })
    }

}

export const coursesRepository = new CoursesRepository();


// ========================================================================================
export const getTodoList = cache((): Promise<TodoListElement[]> => dbClient.todo.findMany());
export const createTodoElement = (command: CreateTodoListElementCommand): Promise<TodoListElement> => {
    return dbClient.todo.create({
        data: command,
    })
}
export const deleteTodoElement = (command: DeleteTodoListElement) => {
    return dbClient.todo.delete({
        where: {id: command.id}
    })
}