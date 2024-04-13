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
    description: "Learn more about pregnancy prevention medications",
    backgroundColor: "bg-[#dba4eb]",
    textColor: "text-[#dba4eb]",
    borderColor: "border-[#be3de3]",
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
      { type: "book", description: "Other topics" },
      { type: "trophy", description: "Contraceptives summary" },
    ],
  },
  // {
  //   unitNumber: 2,
  //   description: "Get around in a city",
  //   backgroundColor: "bg-[#ce82ff]",
  //   textColor: "text-[#ce82ff]",
  //   borderColor: "border-[#a568cc]",
  //   tiles: [
  //     { type: "fast-forward", description: "Get around in a city" },
  //     { type: "dumbbell", description: "Personalized practice" },
  //     { type: "book", description: "One thing" },
  //     { type: "treasure" },
  //     { type: "star", description: "Get around in a city" },
  //     { type: "book", description: "A very big family" },
  //     { type: "star", description: "Greet people" },
  //     { type: "book", description: "The red jacket" },
  //     { type: "treasure" },
  //     { type: "dumbbell", description: "Personalized practice" },
  //     { type: "trophy", description: "Unit 2 review" },
  //   ],
  // },
  // {
  //   unitNumber: 3,
  //   description: "Order food and drink",
  //   backgroundColor: "bg-[#00cd9c]",
  //   textColor: "text-[#00cd9c]",
  //   borderColor: "border-[#00a47d]",
  //   tiles: [
  //     { type: "fast-forward", description: "Order food and drink" },
  //     { type: "book", description: "The passport" },
  //     { type: "star", description: "Order food and drinks" },
  //     { type: "treasure" },
  //     { type: "book", description: "The honeymoon" },
  //     { type: "star", description: "Get around in a city" },
  //     { type: "treasure" },
  //     { type: "dumbbell", description: "Personalized practice" },
  //     { type: "book", description: "Doctor Eddy" },
  //     { type: "trophy", description: "Unit 2 review" },
  //   ],
  // },
];
