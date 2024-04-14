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

import axios from "axios"; // Import Axios

function App() {
  const [response, setResponse] = useState(null);
  const [pregnancyInfo, setPregnancyInfo] = useState(null);
  const [conditionInfo, setConditionInfo] = useState(null);
  const [contraceptionInfo, setContraceptionInfo] = useState(null);
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const name = useBoundStore((x) => x.name);
  const username = useBoundStore((x) => x.username);
  const joinedAt = useBoundStore((x) => x.joinedAt).format("MMMM YYYY");
  const followingCount = 0;
  const followersCount = 0;
  const language = useBoundStore((x) => x.language);

  const [responseComplete, setResponseComplete] = useState(false);

  const age = useBoundStore((x) => x.age);
  const email = useBoundStore((x) => x.email);
  const sexbirth = useBoundStore((x) => x.sexbirth);
  const sexpref = useBoundStore((x) => x.sexpref);
  const sexactive = useBoundStore((x) => x.sexactive);

  const searchParams = useSearchParams();
  const topic = searchParams.get('topic');

  const UnorderedList = (myList) => {
    console.log(myList)
    console.log(Array.isArray(myList.list))
    return (
      <ul>
        {myList.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  const renderContraceptivesInfo = () => {
    return (
      <div>
        <h1><b>{contraceptionInfo.name}</b></h1><br></br>
        <h2><b>How it Works:</b> {contraceptionInfo.how_it_works}</h2><br></br>
        <h3><b>Efficacy:</b> {contraceptionInfo.efficacy}</h3><br></br>
        <h3><b>Cost:</b> {contraceptionInfo.cost}</h3><br></br>
        <h3><b>Pros:</b></h3>
        <UnorderedList list={contraceptionInfo.pros} /><br></br>
        <h3><b>Cons:</b></h3>
        <UnorderedList list={contraceptionInfo.cons} /><br></br>
      </div>
    )
  }

  const renderPregnancyInfo = () => {
    return (
      <div>
        <h1><b>{pregnancyInfo.name}</b></h1><br></br>
        <h2><b>What is Normal?</b></h2>
        <UnorderedList list={pregnancyInfo.what_is_normal} /><br></br>
        <h2><b>What to Look Out For?</b></h2>
        <UnorderedList list={pregnancyInfo.what_to_look_out_for} /><br></br>
        <h2><b>What Testing to Get?</b></h2>
        <UnorderedList list={pregnancyInfo.testing_to_get} /><br></br>
        <h2><b>Maternal Health Action Items</b></h2>
        <UnorderedList list={pregnancyInfo.maternal_health} /><br></br>
        <h2><b>Baby Health Action Items</b></h2>
        <UnorderedList list={pregnancyInfo.baby_health} /><br></br>
      </div>
    )
  }

  const renderConditionInfo = () => {
    return (
      <div>
        <h1><b>{conditionInfo.name}</b></h1><br></br>
        <h2><b>{conditionInfo.prevalence}</b></h2><br></br>
        <h2><b>Preventative Measures</b></h2>
        <UnorderedList list={conditionInfo.preventative_measures} /><br></br>
        <h2><b>Symptoms</b></h2>
        <UnorderedList list={conditionInfo.symptoms} /><br></br>
        <h2><b>Diagnoses</b></h2>
        <UnorderedList list={conditionInfo.diagnoses} /><br></br>
        <h2><b>Treatments</b></h2>
        <UnorderedList list={conditionInfo.treatments} /><br></br>
        <h2><b>{conditionInfo.when_to_see_doctor}</b></h2>
      </div>
    )
  }

  const renderInfo = () => {
    if (conditionInfo != null) return renderConditionInfo()
    else if (contraceptionInfo != null) return renderContraceptivesInfo()
    return renderPregnancyInfo()
  }


const fetchData = async () => {

  try {

    setResponseComplete(false);
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/prompt',
      headers: { 
      'Content-Type': 'application/json'
      },
      timeout: 10000,
      params: {
        age: age,
        sexAtBirth: sexbirth,
        sexualPreference: sexpref,
        subjectMatterExpertise: language.name,
        courseName: topic,
        active: sexactive
      }
      };

      axios.request(config)
        .then((response) => {
          console.log(response)
          setResponse(response.data);
          if (language.name == "Reproductive Illnesses") setConditionInfo(response.data);
          else if (language.name == "Pregnancy") setPregnancyInfo(response.data);
          else setContraceptionInfo(response.data);
          console.log(contraceptionInfo)
          console.log(pregnancyInfo)
          console.log(conditionInfo)
          setResponseComplete(true);
        })
        .catch((error) => {
          console.log(error);
        });

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

  useEffect(() => {
    if (topic) {  // Ensure topic is not null or undefined
      fetchData();
    }
  }, [topic]);

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
                  </header>
            </div>
            {
              !responseComplete ? 
                <div><b>Response Loading...</b></div> : 
                <div>
                  {renderInfo()}
                </div>
                
            }
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


