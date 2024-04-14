import dayjs from "dayjs";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type UserSlice = {
  name: string;
  username: string;
  age: string;
  email: string;
  sexbirth: string;
  sexpref: string;
  sexactive: string;

  joinedAt: dayjs.Dayjs;
  loggedIn: boolean;
  setName: (name: string) => void;
  setUsername: (username: string) => void;

  setAge: (age: string) => void;
  setEmail: (email: string) => void;
  setSexBirth: (sexbirth: string) => void;
  setSexPref: (sexpref: string) => void;
  setSexActive: (sexactive: string) => void;

  logIn: () => void;
  logOut: () => void;
};

export const createUserSlice: BoundStateCreator<UserSlice> = (set) => ({
  name: "",
  username: "",
  age: "25",
  email: "dow@gmail.com",
  sexbirth: "female",
  sexpref: "heterosexual",
  sexactive: "yes",
  joinedAt: dayjs(),
  loggedIn: false,
  setName: (name: string) => set(() => ({ name })),
  setUsername: (username: string) => set(() => ({ username })),

  setName: (name: string) => set(() => ({ name })),
  setUsername: (username: string) => set(() => ({ username })),
  setAge: (age: string) => set(() => ({ age })),
  setEmail: (email: string) => set(() => ({ email })),
  setSexBirth: (sexbirth: string) => set(() => ({ sexbirth })),
  setSexPref: (sexpref: string) => set(() => ({ sexpref })),
  setSexActive: (sexactive: string) => set(() => ({ sexactive })),


  logIn: () => set(() => ({ loggedIn: true })),
  logOut: () => set(() => ({ loggedIn: false })),
});
