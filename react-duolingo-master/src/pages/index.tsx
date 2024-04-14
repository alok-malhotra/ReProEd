import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "~/components/Svgs";
import { HealthIconSvg } from "~/components/Svgs";
import React from "react";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";
import { LanguageCarousel } from "~/components/LanguageCarousel";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white"
      style={{ backgroundImage: `url(${bgSnow.src})` }}
    >
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
      <HealthIconSvg className="h-fit w-7/12 md:w-[400px]" />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            The free, fun, and effective AI-powered reproductive education resource!
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/register"
              // className="w-full rounded-2xl border-b-4 border-blue-700 bg-blue-600 px-10 py-3 text-center font-bold uppercase transition hover:border-blue-600 hover:bg-blue-500 md:min-w-[320px]"
              className="w-full rounded-2xl border-b-4 border-purple-700 bg-purple-600 px-10 py-3 text-center font-bold uppercase transition hover:border-purple-600 hover:bg-purple-500 md:min-w-[320px]"

            >
              Lets go!
            </Link>
          </div>
        </div>
      </div>
      {/*<LanguageCarousel />*/}
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
