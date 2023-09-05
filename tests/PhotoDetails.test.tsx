import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";

import { PhotoDetails } from "../src/components/PhotoDetails/PhotoDetails";

describe("<PhotoDetails />", () => {
	test("Tests running", () => {
		expect(2).toBe(2);
	});

	test("Check altText", async () => {
		render(<PhotoDetails imgSrc="testSrc" />);

		expect(
			screen.findByAltText("Selected Image from Lorem Picsum larger")
		).toBeDefined();
		expect(screen.getByText("testSrc")).toBeVisible();
	});

	test("Check Image Source text", async () => {
		render(<PhotoDetails imgSrc="testSrc" />);

		expect(
			screen.findByAltText("Selected Image from Lorem Picsum larger")
		).toBeDefined();
		expect(screen.getByText("testSrc")).toBeVisible();
	});

});
