import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseItem } from "./course-item";

describe("course item", () => {
  it("should call delete calback", async () => {
    const onDelete = jest.fn();
    render(
      <CourseItem
        course={{
          id: "kjkjj",
          description: "kjkjkjkjwe8fh",
          name: "wytrtdetdf",
        }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalled();
  });
});
