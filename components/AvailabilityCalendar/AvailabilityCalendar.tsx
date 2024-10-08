"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  {
    from: new Date("05-01-2024"),
    to: new Date("09-17-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("09-25-2024"),
    to: new Date("09-29-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("10-02-2024"),
    to: new Date("10-06-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("10-17-2024"),
    to: new Date("10-21-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("11-01-2024"),
    to: new Date("11-04-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("04-30-2025"),
    to: new Date("05-04-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-24-2025"),
    to: new Date("07-02-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("07-24-2025"),
    to: new Date("08-4-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("08-23-2025"),
    to: new Date("09-14-2025"),
    middayCheckout: true,
  },
];

function AvailabilityCalendar() {
  return (
    <>
      <Calendar bookings={bookings} />
    </>
  );
}

export default AvailabilityCalendar;
