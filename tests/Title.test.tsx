import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";

import Title from "../src/components/Title/Title";




describe("<Title />", () => {
	test("Tests running", () => {
		expect(2).toBe(2);
	});
	
	test("Check Title", async () => {
		render(<Title />);

		expect(screen.getByRole("heading")).toHaveTextContent("Title");
		expect(screen.getByRole("button")).toHaveTextContent("Click Me");
	});
});
