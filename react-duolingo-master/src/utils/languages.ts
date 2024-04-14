export type Language = (typeof languages)[number];

const languages = [
  { name: "Contraceptives", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
  { name: "Pregnancy", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
  { name: "Reproductive Illnesses", nativeName: "English", viewBox: "0 0 82 66", code: "en" },

  ] as const;

export default languages;
