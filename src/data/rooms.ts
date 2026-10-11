import standard from "@/assets/room-standard.jpg";
import executive from "@/assets/room-executive.jpg";
import family from "@/assets/room-family.jpg";
import luxury from "@/assets/room-luxury.jpg";

// 1C1 real images
import room1c1_1 from "@/assets/rooms/executive/1c1/img1.png";
import room1c1_2 from "@/assets/rooms/executive/1c1/img2.png";
import room1c1_3 from "@/assets/rooms/executive/1c1/img3.png";
import room1c1_bathroom from "@/assets/rooms/executive/1c1/bathroom.png";

// 1C2 real images
import room1c2_1 from "@/assets/rooms/standard/1c2/img1.png";
import room1c2_2 from "@/assets/rooms/standard/1c2/img2.png";
import room1c2_3 from "@/assets/rooms/standard/1c2/img3.png";
import room1c2_bathroom from "@/assets/rooms/standard/1c2/bathroom.png";

// 1C4 real images
import room1c4_1 from "@/assets/rooms/executive/1c4/img1.png";
import room1c4_2 from "@/assets/rooms/executive/1c4/img2.png";
import room1c4_3 from "@/assets/rooms/executive/1c4/img3.png";
import room1c4_4 from "@/assets/rooms/executive/1c4/img4.png";
import room1c4_bathroom from "@/assets/rooms/executive/1c4/bathroom.png";

// 1C3 real images
import room1c3_1 from "@/assets/rooms/standard/1c3/img1.png";
import room1c3_2 from "@/assets/rooms/standard/1c3/img2.png";
import room1c3_3 from "@/assets/rooms/standard/1c3/img3.png";
import room1c3_bathroom from "@/assets/rooms/standard/1c3/bathroom.png";

// 1A1 real images
import room1a1_1 from "@/assets/rooms/2-bedroom/1a1/img1.png";
import room1a1_2 from "@/assets/rooms/2-bedroom/1a1/img2.png";
import room1a1_3 from "@/assets/rooms/2-bedroom/1a1/img3.png";
import room1a1_4 from "@/assets/rooms/2-bedroom/1a1/img4.png";
import room1a1_5 from "@/assets/rooms/2-bedroom/1a1/img5.jpg";
import room1a1_6 from "@/assets/rooms/2-bedroom/1a1/img6.png";
import room1a1_7 from "@/assets/rooms/2-bedroom/1a1/img7.png";
import room1a1_guestbathroom from "@/assets/rooms/2-bedroom/1a1/guestbathroom.png";
import room1a1_8 from "@/assets/rooms/2-bedroom/1a1/img8.png";
import room1a1_9 from "@/assets/rooms/2-bedroom/1a1/img9.png";
import room1a1_10 from "@/assets/rooms/2-bedroom/1a1/img10.jpg";
import room1a1_11 from "@/assets/rooms/2-bedroom/1a1/img11.jpg";
import room1a1_bathroom1 from "@/assets/rooms/2-bedroom/1a1/bathroom1.png";
import room1a1_bathroom2 from "@/assets/rooms/2-bedroom/1a1/bathroom2.png";
import room1a1_kitchen from "@/assets/rooms/2-bedroom/1a1/kitchen.png";

// 1A2 real images
import room1a2_1 from "@/assets/rooms/2-bedroom/1a2/img1.png";
import room1a2_2 from "@/assets/rooms/2-bedroom/1a2/img2.png";
import room1a2_3 from "@/assets/rooms/2-bedroom/1a2/img3.jpg";
import room1a2_4 from "@/assets/rooms/2-bedroom/1a2/img4.png";
import room1a2_5 from "@/assets/rooms/2-bedroom/1a2/img5.png";
import room1a2_6 from "@/assets/rooms/2-bedroom/1a2/img6.png";
import room1a2_7 from "@/assets/rooms/2-bedroom/1a2/img7.png";
import room1a2_8 from "@/assets/rooms/2-bedroom/1a2/img8.png";
import room1a2_9 from "@/assets/rooms/2-bedroom/1a2/img9.png";
import room1a2_10 from "@/assets/rooms/2-bedroom/1a2/img10.png";
import room1a2_11 from "@/assets/rooms/2-bedroom/1a2/img11.png";

import room1a2_bathroom1 from "@/assets/rooms/2-bedroom/1a2/bathroom1.png";
import room1a2_bathroom2 from "@/assets/rooms/2-bedroom/1a2/bathroom2.png";
import room1a2_kitchen from "@/assets/rooms/2-bedroom/1a2/kitchen.png";

export type RoomUnit = {
  id: string;
  name: string;
  description: string;
  images: string[];
  videos: string[];
  bedType?: string;
  capacity?: string;
  floor?: string;
  amenities: string[];
};

export type Room = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
  units: RoomUnit[];
};

export const ROOMS: Room[] = [
  // =========================================================
  // STANDARD ROOMS
  // =========================================================
  {
    id: "standard",
    title: "Standard Rooms",
    description:
      "Comfortable and welcoming rooms designed for relaxing stays, short getaways and business visits.",
    price: "GH₵400 / night",
    image: standard,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Private Bathroom",
      "TV",
      "Comfortable Bed",
    ],

    units: [
            {
        id: "1c2",
        name: "1C2",
        description:
          "A comfortable standard room offering a clean, peaceful and relaxing stay at Adepa Heights Complex.",
        images: [
          room1c2_1,
          room1c2_2,
          room1c2_3,
          room1c2_bathroom,
        ],
        videos: [],
        bedType: "Queen Bed",
        capacity: "1 Adult",
        floor: "First Floor",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
          "Mini Fridge",
        ],
      },

      {
        id: "1c3",
        name: "1C3",
        description:
          "A comfortable standard room designed for a relaxing stay at Adepa Heights Complex.",
        images: [room1c3_1, room1c3_2, room1c3_3, room1c3_bathroom],
        videos: [],
        bedType: "Queen Bed",
        capacity: "1 Adult",
        floor: "Second Floor",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
          "Mini Fridge",
        ],
      },

      {
        id: "2b1-single",
        name: "2B1 Single",
        description:
          "A standard single room offering a comfortable and convenient stay.",
        images: [standard],
        videos: [],
        bedType: "Single Bed",
        capacity: "1 Adult",
        floor: "First Floor",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
          "Mini Fridge",
        ],
      },

      {
        id: "2b2-s",
        name: "2B2 S",
        description:
          "A comfortable standard room suitable for a relaxing stay.",
        images: [standard],
        videos: [],
        bedType: "Single Bed",
        capacity: "1 Adult",
        floor: "First Floor",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
          "Mini Fridge",
        ],
      },
    ],
  },

  // =========================================================
  // EXECUTIVE ROOMS
  // =========================================================
  {
    id: "executive",
    title: "Executive Rooms",
    description:
      "A refined accommodation option offering extra comfort and a relaxing environment for your stay.",
    price: "GH₵600 / night",
    image: executive,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Private Bathroom",
      "TV",
      "Comfortable Bed",
    ],

    units: [
      // -----------------------------------------------------
      // 1C1
      // -----------------------------------------------------
      {
        id: "1c1",
        name: "1C1",
        description:
          "An executive room offering enhanced comfort and a relaxing environment.",
        images: [
          room1c1_1,
          room1c1_2,
          room1c1_3,
          room1c1_bathroom,
        ],
        videos: [],
        bedType: "King Bed",
        capacity: "1-2 Adults",
        floor: "first floor",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
          "Mini Kitchen",
          "Mini Fridge",
        ],
      },

      // -----------------------------------------------------
      // 1C4
      // -----------------------------------------------------
      {
        id: "1c4",
        name: "1C4",
        description:
          "An executive room offering enhanced comfort and a relaxing environment.",
        images: [
          room1c4_1,
          room1c4_2,
          room1c4_3,
          room1c4_4,
          room1c4_bathroom,
        ],
        videos: [],
        bedType: "King Bed",
        capacity: "1-2 Adults",
        floor: "Second Floor",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
          "Mini Kitchen",
          "Mini Fridge",
        ],
      },

      // -----------------------------------------------------
      // 4B6
      // -----------------------------------------------------
      {
        id: "4b6",
        name: "4B6",
        description:
          "An executive room designed for a comfortable and enjoyable stay.",
        images: [executive],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
        ],
      },

      // -----------------------------------------------------
      // 4B5
      // -----------------------------------------------------
      {
        id: "4b5",
        name: "4B5",
        description:
          "An executive room designed for a comfortable and enjoyable stay.",
        images: [executive],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
        ],
      },

      // -----------------------------------------------------
      // 4B4
      // -----------------------------------------------------
      {
        id: "4b4",
        name: "4B4",
        description:
          "An executive room designed for a comfortable and enjoyable stay.",
        images: [executive],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
        ],
      },

      // -----------------------------------------------------
      // 4B1
      // -----------------------------------------------------
      {
        id: "4b1",
        name: "4B1",
        description:
          "An executive room designed for a comfortable and enjoyable stay.",
        images: [executive],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
        ],
      },

      // -----------------------------------------------------
      // 4B2
      // -----------------------------------------------------
      {
        id: "4b2",
        name: "4B2",
        description:
          "An executive room designed for a comfortable and enjoyable stay.",
        images: [executive],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
        ],
      },

      // -----------------------------------------------------
      // 4B3
      // -----------------------------------------------------
      {
        id: "4b3",
        name: "4B3",
        description:
          "An executive room designed for a comfortable and enjoyable stay.",
        images: [executive],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Comfortable Bed",
        ],
      },
    ],
  },

  // =========================================================
  // 2-BEDROOM APARTMENTS
  // =========================================================
  {
    id: "two-bedroom",
    title: "2-Bedroom Apartments",
    description:
      "Spacious apartments designed for families, groups and guests who want more room and comfort.",
    price: "GH₵1,300 / night",
    image: family,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Private Bathroom",
      "TV",
      "Living Space",
    ],

    units: [
          {
      id: "1a1",
      name: "1A1",
      description:
        "A spacious two-bedroom apartment offering comfortable living areas, bedrooms, bathrooms and a fully equipped kitchen for a relaxing stay at Adepa Heights Complex.",
      images: [
        room1a1_1,
        room1a1_2,
        room1a1_3,
        room1a1_4,
        room1a1_5,
        room1a1_6,
        room1a1_7,
        room1a1_guestbathroom,
        room1a1_8,
        room1a1_9,
        room1a1_10,
        room1a1_11,
        room1a1_bathroom1,
        room1a1_bathroom2,
        room1a1_kitchen,
      ],
      videos: [],
      bedType: "",
      capacity: "",
      floor: "",
      amenities: [
        "WiFi",
        "Air Conditioning",
        "Private Bathrooms",
        "TV",
        "Fully Equipped Kitchen",
        "Living Area",
        "Dining Area",
      ],
    },

      {
      id: "1a2",
      name: "1A2",
      description:
        "A spacious two-bedroom apartment offering a comfortable and relaxing stay at Adepa Heights Complex.",
      images: [
        room1a2_1,
        room1a2_2,
        room1a2_3,
        room1a2_4,
        room1a2_5,
        room1a2_6,
        room1a2_7,
        room1a2_8,
        room1a2_9,
        room1a2_10,
        room1a2_11,
        room1a2_bathroom1,
        room1a2_bathroom2,
        room1a2_kitchen,
      ],
      videos: [],
      bedType: "2 King Beds",
      capacity: "4 Adults",
      floor: "first floor",
      amenities: [
        "WiFi",
        "Air Conditioning",
        "Private Bathrooms",
        "TV",
        "Comfortable Beds",
        "Living Space",
        "Spacious Living Area",
        "Fully Equipped Kitchen",
      ],
    },
      {
        id: "2a1",
        name: "2A1",
        description:
          "A spacious two-bedroom apartment designed for families and groups.",
        images: [family],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Living Space",
        ],
      },

      {
        id: "2a2",
        name: "2A2",
        description:
          "A spacious two-bedroom apartment designed for families and groups.",
        images: [family],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Living Space",
        ],
      },

      {
        id: "3a1",
        name: "3A1",
        description:
          "A spacious two-bedroom apartment designed for families and groups.",
        images: [family],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Living Space",
        ],
      },

      {
        id: "3a2",
        name: "3A2",
        description:
          "A spacious two-bedroom apartment designed for families and groups.",
        images: [family],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Living Space",
        ],
      },

      {
        id: "2b1",
        name: "2B1",
        description:
          "A spacious two-bedroom apartment designed for families and groups.",
        images: [family],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Living Space",
        ],
      },

      {
        id: "2b2",
        name: "2B2",
        description:
          "A spacious two-bedroom apartment designed for families and groups.",
        images: [family],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathroom",
          "TV",
          "Living Space",
        ],
      },
    ],
  },

  // =========================================================
  // 3-BEDROOM APARTMENTS
  // =========================================================
  {
    id: "three-bedroom",
    title: "3-Bedroom Apartments",
    description:
      "Our largest accommodation option, ideal for families, groups and longer stays.",
    price: "GH₵1,600 / night",
    image: luxury,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Private Bathrooms",
      "TV",
      "Spacious Living Area",
    ],

    units: [
      {
        id: "3b2",
        name: "3B2",
        description:
          "A spacious three-bedroom apartment designed for families, groups and longer stays.",
        images: [luxury],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathrooms",
          "TV",
          "Spacious Living Area",
        ],
      },

      {
        id: "3b1",
        name: "3B1",
        description:
          "A spacious three-bedroom apartment designed for families, groups and longer stays.",
        images: [luxury],
        videos: [],
        bedType: "",
        capacity: "",
        floor: "",
        amenities: [
          "WiFi",
          "Air Conditioning",
          "Private Bathrooms",
          "TV",
          "Spacious Living Area",
        ],
      },
    ],
  },
];