import { render } from "@testing-library/react";
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

    expect(onDelete).toHaveBeenCalled();
  });
});
