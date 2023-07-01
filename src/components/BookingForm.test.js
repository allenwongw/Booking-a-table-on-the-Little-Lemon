import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BookingForm from "./BookingForm";

test("It should not be allow has no '@' in the inputted Email value", async () => {
  render(<BookingForm />);
  const emailInput = screen.getByLabelText(/Email/i);

  await user.type(emailInput, "sdkweladfa123");
  await user.tab();

  expect(screen.getByText("Invalid Email")).toBeInTheDocument();
});

test("It should not be allow empty name input value", async () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/Your Name/i);

  await user.type(nameInput, " ");
  await user.tab();

  expect(screen.getByText("Name must not be empty")).toBeInTheDocument();
});
