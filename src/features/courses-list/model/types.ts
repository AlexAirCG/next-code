/* eslint-disable @typescript-eslint/no-unused-vars */
// Course ============================================================

type CourseListElement = {
    id: string;
    name: string;
    description: string;
}


type CreateCourseListElementCommand = {
    name: string;
    description: string;
}

type DeleteCourseListElementCommand = {
    id: string
}


// Todo ===============================================================

type TodoListElement = {
    id: string;
    text: string;
}

type CreateTodoListElementCommand = {
    text: string;
}

type DeleteTodoListElement = {
    id: string;
}