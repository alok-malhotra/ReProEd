export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    title: "Contraception",
    description: "Learn more about options to avoid pregnancy",
    backgroundColor: "bg-[#5b58f5]",
    textColor: "text-[#5b58f5]",
    borderColor: "border-[#5b58f5]",
    tiles: [
      {
        type: "book",
        description: "Contraceptive options",
      },
      {
        type: "book",
        description: "Oral contraceptives (OCP)",
      },
      {
        type: "book",
        description: "Intrauterine devices (IUD)",
      },
      {
        type: "book",
        description: "Barrier methods",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      { type: "trophy", description: "Contraceptives summary" },
    ],
  },
  {
    unitNumber: 2,
    title: "Pregnancy",
    description: "preggggggnant",
    backgroundColor: "bg-[#db7ff5]",
    textColor: "text-[#db7ff5]",
    borderColor: "border-[#db7ff5]",
    tiles: [
      {
        type: "book",
        description: "First Trimester",
      },
      {
        type: "book",
        description: "Second Trimester",
      },
      {
        type: "book",
        description: "Third Trimester",
      },
      { type: "trophy", description: "Pregnancy summary" },
    ],
  },
  {
    unitNumber: 3,
    title: "Common Illnesses",
    description: "Common reproductive illnesses",
    backgroundColor: "bg-[#f74239]",
    textColor: "text-[#f74239]",
    borderColor: "border-[#f74239]",
    tiles: [
      {
        type: "book",
        description: "Contraceptive options",
      },
      {
        type: "book",
        description: "Oral contraceptives (OCP)",
      },
      {
        type: "book",
        description: "Intrauterine devices (IUD)",
      },
      {
        type: "book",
        description: "Barrier methods",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      {
        type: "book",
        description: "Cycle timing",
      },
      { type: "book", description: "Other topics" },
      { type: "trophy", description: "Contraceptives summary" },
    ],
  },
];
