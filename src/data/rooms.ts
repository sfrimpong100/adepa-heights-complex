import standard from "@/assets/room-standard.jpg";
import executive from "@/assets/room-executive.jpg";
import family from "@/assets/room-family.jpg";
import luxury from "@/assets/room-luxury.jpg";

export type Room = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
};

export const ROOMS: Room[] = [
  {
    id: "standard",
    title: "Standard Room",
    description: "A cosy, well-appointed room ideal for solo travellers and short getaways.",
    price: "From GHS 450 / night",
    image: standard,
    amenities: ["WiFi", "Air Conditioning", "Private Bathroom", "TV", "Comfortable Bed"],
  },
  {
    id: "executive",
    title: "Executive Studio",
    description: "Refined studio with a quiet workspace and lounge — perfect for working stays.",
    price: "From GHS 650 / night",
    image: executive,
    amenities: ["WiFi", "Air Conditioning", "Private Bathroom", "TV", "Workspace"],
  },
  {
    id: "family",
    title: "Family Apartment",
    description: "Spacious apartment with a full living area and dining — built for families and groups.",
    price: "From GHS 950 / night",
    image: family,
    amenities: ["WiFi", "Air Conditioning", "Kitchenette", "TV", "Living Room"],
  },
  {
    id: "luxury",
    title: "Luxury Suite",
    description: "Our signature suite — elegant interiors, sweeping views and premium comfort.",
    price: "From GHS 1,400 / night",
    image: luxury,
    amenities: ["WiFi", "Air Conditioning", "En-suite Bath", "Smart TV", "King Bed"],
  },
];
