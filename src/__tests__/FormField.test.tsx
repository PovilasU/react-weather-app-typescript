//create test for FormField component

import { render, screen } from "@testing-library/react";
import FormField from "../components/FormField";

describe("FormField", () => {
    it("renders the title and placeholder correctly", () => {
        const title = "Test Title";
        const placeholder = "Test Placeholder";
        render(
            <FormField title={title} name="testName" placeholder={placeholder} />
        );

        const titleLabel = screen.getByText(title);
        const inputElement = screen.getByPlaceholderText(placeholder);

        expect(titleLabel).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
    });
});
