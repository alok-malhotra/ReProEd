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
        description: "Abstinence",
      },
      {
        type: "book",
        description: "Withdrawal",
      },
      {
        type: "book",
        description: "External Condoms",
      },
      {
        type: "book",
        description: "Internal Condoms",
      },
      {
        type: "book",
        description: "Diaphragm",
      },
      {
        type: "book",
        description: "Oral Contraceptives",
      },
      {
        type: "book",
        description: "Contraceptive Implants",
      },
      {
        type: "book",
        description: "Intrauterine Devices (IUDs)",
      },
      {
        type: "book",
        description: "Contraceptive Injections",
      },
      {
        type: "book",
        description: "Male Birth Control",
      },
      {
        type: "book",
        description: "Tubal Ligation",
      },
      {
        type: "book",
        description: "Vasectomy",
      },
      {
        type: "book",
        description: "Emergency Contraceptive",
      },
      { type: "trophy", description: "Contraceptives summary" },
    ],
  },
  {
    unitNumber: 2,
    title: "Pregnancy",
    description: "what to expect when you're expecting",
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
    title: "Reproductive Illnesses",
    description: "Common reproductive illnesses",
    backgroundColor: "bg-[#f74239]",
    textColor: "text-[#f74239]",
    borderColor: "border-[#f74239]",
    tiles: [
      {
        type: "book",
        description: "UTI: Cystitis",
      },
      {
        type: "book",
        description: "UTI: Urethritis",
      },
      {
        type: "book",
        description: "UTI: Pyelonephritis",
      },
      {
        type: "book",
        description: "UTI: Vaginitis",
      },
      {
        type: "book",
        description: "STI: Bacterial Vaginosis",
      },
      {
        type: "book",
        description: "STI: Chlamydia",
      },
      {
        type: "book",
        description: "STI: Gonorrhea",
      },
      {
        type: "book",
        description: "STI: Herpes",
      },
      {
        type: "book",
        description: "STI: HIV/AIDS",
      },
      {
        type: "book",
        description: "STI: Human Papilloma Virus (HPV)",
      },
      {
        type: "book",
        description: "STI: Mycoplasma Genitalium",
      },
      {
        type: "book",
        description: "STI: Pelvic Inflammatory Disease (PID)",
      },
      {
        type: "book",
        description: "STI: Syphilis",
      },
      {
        type: "book",
        description: "STI: Trichomoniasis",
      },
      {
        type: "book",
        description: "Cervical Cancer",
      },
      {
        type: "book",
        description: "Ovarian Cancer",
      },
      {
        type: "book",
        description: "Uterine Cancer",
      },
      {
        type: "book",
        description: "Vaginal Cancer",
      },
      {
        type: "book",
        description: "Vulvular Cancer",
      },
      {
        type: "book",
        description: "Prostate Cancer",
      },
      {
        type: "book",
        description: "Bladder Cancer",
      },
      {
        type: "book",
        description: "Testicular Cancer",
      },
      { type: "trophy", description: "Contraceptives summary" },
    ],
  },
];
