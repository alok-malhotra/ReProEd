export type Language = (typeof languages)[number];

const languages = [
  { name: "Contraceptive", nativeName: "English", viewBox: "0 0 82 66", code: "en" }

  ] as const;

export default languages;
