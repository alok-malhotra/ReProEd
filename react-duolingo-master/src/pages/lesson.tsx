import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";

import { useBoundStore } from "~/hooks/useBoundStore";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'
import { TopBar } from "~/components/TopBar";
import { BottomBar } from "~/components/BottomBar";
import { RightBar } from "~/components/RightBar";
import { LeftBar } from "~/components/LeftBar";
import { LoginScreen, useLoginScreen } from "~/components/LoginScreen";

function App() {
  const [response, setResponse] = useState(null);
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const name = useBoundStore((x) => x.name);
  const username = useBoundStore((x) => x.username);
  const joinedAt = useBoundStore((x) => x.joinedAt).format("MMMM YYYY");
  const followingCount = 0;
  const followersCount = 0;
  const language = useBoundStore((x) => x.language);

  const age = useBoundStore((x) => x.age);
  const email = useBoundStore((x) => x.email);
  const sexbirth = useBoundStore((x) => x.sexbirth);
  const sexpref = useBoundStore((x) => x.sexpref);
  const sexactive = useBoundStore((x) => x.sexactive);

  const searchParams = useSearchParams();
  const topic = searchParams.get('topic');

const fetchData = async () => {

  try {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    age: age,
    sexAtBirth: sexbirth,
    sexualPreference: sexpref,
    subjectMatterExpertise: language,
    courseName: topic,
    active: sexactive
    })
  };
  const response = await fetch('http://localhost:8000/api/prompt', requestOptions);
  const data = await response.json();
  setResponse(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  };


  const getTopBarColors = (
    scrollY: number,
  ): {
    backgroundColor: `bg-${string}`;
    borderColor: `border-${string}`;
  } => {
    const defaultColors = {
      backgroundColor: "bg-[#58cc02]",
      borderColor: "border-[#46a302]",
    } as const;

    if (scrollY < 680) {
      return defaultColors;
    } else if (scrollY < 1830) {
      return units[1] ?? defaultColors;
    } else {
      return units[2] ?? defaultColors;
    }
  };

  const { loginScreenState, setLoginScreenState } = useLoginScreen();

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
      const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
      updateScrollY();
      document.addEventListener("scroll", updateScrollY);
      return () => document.removeEventListener("scroll", updateScrollY);
    }, [scrollY]);

    const topBarColors = getTopBarColors(scrollY);


return (

    <>
      <TopBar
        backgroundColor={topBarColors.backgroundColor}
        borderColor={topBarColors.borderColor}
      />
      <LeftBar selectedTab="Learn" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-2xl grow flex-col">

          <div>
            <div className="App">
                  <header className="App-header">
                    <h1>{topic}</h1>
                  </header>
            </div>
            {response && (
            <div>
            <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
            )}
          </div>


        </div>
        <RightBar />
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="Learn" />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>

);
}

export default App;