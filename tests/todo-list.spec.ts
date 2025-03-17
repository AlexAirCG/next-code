import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "задача" }).click();
  await page.getByRole("textbox", { name: "задача" }).fill("hello");
  await page.locator("form").getByRole("button").click();
  await page.getByRole("checkbox").nth(2).click();
  await page
    .locator("div")
    .filter({ hasText: /^helloЗавтракhello$/ })
    .getByRole("button")
    .nth(2)
    .click();
});
