import { useState } from "react";
import { z } from "zod";
import { SITE } from "@/lib/site";
import { ROOMS } from "@/data/rooms";
import { toast } from "sonner";

const Schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  checkIn: z.string().min(1, "Pick a check-in date"),
  checkOut: z.string().min(1, "Pick a check-out date"),
  roomType: z.string().min(1, "Select a room type"),
  guests: z.string().min(1, "Enter number of guests"),
  message: z.string().max(1000).optional(),
});

export function BookingForm({ defaultRoom }: { defaultRoom?: string }) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = Schema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      setSubmitting(false);
      return;
    }

    const d = parsed.data;
    const msg =
      `*New Booking Request — Adepa Heights Complex*%0A%0A` +
      `*Name:* ${d.name}%0A` +
      `*Phone:* ${d.phone}%0A` +
      `*Email:* ${d.email}%0A` +
      `*Check-in:* ${d.checkIn}%0A` +
      `*Check-out:* ${d.checkOut}%0A` +
      `*Room Type:* ${d.roomType}%0A` +
      `*Guests:* ${d.guests}%0A` +
      (d.message ? `*Message:* ${d.message}%0A` : "");

    const url = `https://wa.me/${SITE.whatsapp}?text=${msg}`;
    window.open(url, "_blank", "noopener");
    toast.success("Opening WhatsApp to confirm your booking…");
    setSubmitting(false);
  }

  const field =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-smooth";
  const label = "block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={label}>Full name</label>
        <input name="name" required maxLength={100} className={field} placeholder="Your full name" />
      </div>
      <div>
        <label className={label}>Phone</label>
        <input name="phone" required maxLength={30} className={field} placeholder="+233…" />
      </div>
      <div>
        <label className={label}>Email</label>
        <input name="email" type="email" required maxLength={255} className={field} placeholder="you@email.com" />
      </div>
      <div>
        <label className={label}>Check-in</label>
        <input name="checkIn" type="date" required className={field} />
      </div>
      <div>
        <label className={label}>Check-out</label>
        <input name="checkOut" type="date" required className={field} />
      </div>
      <div>
        <label className={label}>Room type</label>
        <select name="roomType" required defaultValue={defaultRoom ?? ""} className={field}>
          <option value="" disabled>Select a room</option>
          {ROOMS.map((r) => (
            <option key={r.id} value={r.title}>{r.title}</option>
          ))}
          <option value="Event Space">Event Space</option>
        </select>
      </div>
      <div>
        <label className={label}>Guests</label>
        <input name="guests" type="number" min={1} max={20} required defaultValue={2} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={label}>Message (optional)</label>
        <textarea name="message" rows={4} maxLength={1000} className={field} placeholder="Any special requests?" />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth shadow-soft disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Booking via WhatsApp"}
        </button>
      </div>
    </form>
  );
}
