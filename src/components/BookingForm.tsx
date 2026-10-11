import { useState } from "react";

export function BookingForm({ defaultRoom }: { defaultRoom?: string }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);

    console.log("Booking form submitted:", Object.fromEntries(fd));

    setSubmitting(false);
  }

  const field =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-smooth";

  const label =
    "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="name" className={label}>
          Full name
        </label>

        <input
          id="name"
          name="name"
          required
          className={field}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="phone" className={label}>
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          required
          className={field}
          placeholder="+233…"
        />
      </div>

      <div>
        <label htmlFor="email" className={label}>
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className={field}
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="checkIn" className={label}>
          Check-in
        </label>

        <input
          id="checkIn"
          name="checkIn"
          type="date"
          required
          className={field}
        />
      </div>

      <div>
        <label htmlFor="checkOut" className={label}>
          Check-out
        </label>

        <input
          id="checkOut"
          name="checkOut"
          type="date"
          required
          className={field}
        />
      </div>

      <div>
        <label htmlFor="roomType" className={label}>
          Room
        </label>

        <select
          id="roomType"
          name="roomType"
          required
          defaultValue={defaultRoom ?? ""}
          className={field}
        >
          <option value="" disabled>
            Select a room
          </option>

          {defaultRoom && (
            <option value={defaultRoom}>{defaultRoom}</option>
          )}

          <option value="Standard">Standard</option>
          <option value="Executive">Executive</option>
          <option value="2-Bedroom">2-Bedroom</option>
          <option value="3-Bedroom">3-Bedroom</option>
          <option value="Event Space">Event Space</option>
        </select>
      </div>

      <div>
        <label htmlFor="guests" className={label}>
          Guests
        </label>

        <input
          id="guests"
          name="guests"
          type="number"
          min={1}
          max={20}
          required
          defaultValue={2}
          className={field}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          Message (optional)
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          className={field}
          placeholder="Any special requests?"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth shadow-soft disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Booking Request"}
        </button>
      </div>
    </form>
  );
}