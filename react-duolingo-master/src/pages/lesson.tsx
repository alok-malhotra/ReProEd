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
        <h1>`${contraceptionInfo.name}`</h1>
        <h2>`How it Works: ${contraceptionInfo.how_it_works}`</h2>
        <h3>`Efficacy: ${contraceptionInfo.efficacy}`</h3>
        <h3>`Cost: ${contraceptionInfo.cost}`</h3>
        <h3>Pros</h3>
        <UnorderedList list={contraceptionInfo.pros} />
        <h3>Cons</h3>
        <UnorderedList list={contraceptionInfo.cons} />
      </div>
    )
  }

  const renderPregnancyInfo = () => {
    return (
      <div>
        <h1>`${pregnancyInfo.name}`</h1>
        <h2>What is Normal?</h2>
        <UnorderedList list={pregnancyInfo.what_is_normal} />
        <h2>What to Look Out For?</h2>
        <UnorderedList list={pregnancyInfo.what_to_look_out_for} />
        <h2>What Testing to Get?</h2>
        <UnorderedList list={pregnancyInfo.testing_to_get} />
        <h2>Maternal Health Action Items</h2>
        <UnorderedList list={pregnancyInfo.maternal_health} />
        <h2>Baby Health Action Items</h2>
        <UnorderedList list={pregnancyInfo.baby_health} />
      </div>
    )
  }

  const renderConditionInfo = () => {
    return (
      <div>
        <h1>`${conditionInfo.name}</h1>
        <h2>`${conditionInfo.prevalence}`</h2>
        <h2>Preventative Measures</h2>
        <UnorderedList list={conditionInfo.preventative_measures} />
        <h2>Symptoms</h2>
        <UnorderedList list={conditionInfo.symptoms} />
        <h2>Diagnoses</h2>
        <UnorderedList list={conditionInfo.diagnoses} />
        <h2>Treatments</h2>
        <UnorderedList list={conditionInfo.treatments} />
        <h2>`${conditionInfo.when_to_see_doctor}`</h2>
      </div>
    )
  }

  const renderInfo = () => {
    if (conditionInfo != null) return renderConditionInfo()
    else if (contraceptionInfo != null) return renderContraceptivesInfo()
    return renderPregnancyInfo()
  }

// {
//   "name": "gonorrhea",
//   "prevalence": "Based on your demographics, the prevalence of gonorrhea is relatively high among sexually active individuals in your age group. Gonorrhea is one of the most common sexually transmitted infections (STIs) worldwide.",
//   "preventative_measures": [
//       "Use condoms consistently and correctly during sexual intercourse to reduce the risk of contracting gonorrhea.",
//       "Limit the number of sexual partners and practice monogamy with a partner who has been tested and is free of STIs.",
//       "Regularly get tested for STIs, including gonorrhea, especially if you have multiple sexual partners or engage in unprotected sex."
//   ],
//   "symptoms": [
//       "Pain or burning sensation when urinating",
//       "Unusual discharge from the penis",
//       "Pain or swelling in the testicles",
//       "Sore throat (if gonorrhea was contracted through oral sex)",
//       "Rectal pain, discharge, or bleeding (if gonorrhea was contracted through anal sex)"
//   ],
//   "diagnoses": [
//       "Testing for gonorrhea can involve a urine sample, swabbing the urethra (for men) or cervix (for women), or swabbing the throat or rectum if there are symptoms in those areas.",
//       "These samples are then sent to a laboratory for analysis to confirm the presence of the Neisseria gonorrhoeae bacteria."
//   ],
//   "treatments": [
//       "Gonorrhea is typically treated with antibiotics, such as ceftriaxone or cefixime, to cure the infection.",
//       "It is important to complete the full course of antibiotics as prescribed by your healthcare provider to ensure the infection is completely cleared."
//   ],
//   "when_to_see_doctor": "It is important to see a doctor if you experience any symptoms of gonorrhea or if you have had unprotected sexual contact with a partner who has been diagnosed with gonorrhea. Early diagnosis and treatment are key to preventing complications of gonorrhea, such as pelvic inflammatory disease in women or epididymitis in men. Prompt treatment also helps prevent the spread of infection to sexual partners."
// }


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
          if (language.name == "Common Illnesses") setConditionInfo(response.data);
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
                    <h1>{topic}</h1>
                  </header>
            </div>
            {
              !responseComplete ? 
                <div>Response Loading...</div> : 
                <div>
                  ${renderInfo()}
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


