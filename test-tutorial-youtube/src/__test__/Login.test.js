import { render, screen, userEvent } from "@testing-library/react";
import Login, { validateEmail } from "../Login";

describe("Test Login Component", () => {
    test("render form with 1 button", async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })

    test("should be failed on email validation", () => {
        const testEmail = "amac.com";
        expect(validateEmail(testEmail)).not.toBe(true);
    });

    test("should be successed on email validation", () => {
        const testEmail = "amac@gmail.com";
        expect(validateEmail(testEmail)).toBe(true);
    });

    test("Password input should have type password", () => {
        render(<Login />);
        const password = screen.getByPlaceholderText("パスワード入力");
        expect(password).toHaveAttribute("type", "password");
    });

    test("should be able to submit the form", () => {
        render(<Login />);
        const submitButton = screen.getByTestId("submit");
        const email = screen.getByPlaceholderText("メールアドレス入力");
        const password = screen.getByPlaceholderText("パスワード入力");

        const user = userEvent.setup()
        userEvent.type(email, "amac@gmail.com");
        userEvent.type(password, "abcdef");

        userEvent.click(submitButton);
        const userInfo = screen.getByText("amac@gmail.com");
        expect(userInfo).toBeInTheDocument();
    })
})