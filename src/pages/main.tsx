import Head from "next/head";
import Navbar from "../UI/NavbarM/Navbar";
import Main from "../UI/Main/main";
import Footer from "../UI/FooterM/Footer";
import { useState } from "react";

interface Props {
  step: number;
}

interface FooterProps {
  nextStep: () => void;
  backStep: () => void;
}

function Index() {
  const [step, setStep] = useState<number>(1);

  const nextStep = (): void => {
    setStep(step + 1);
  };

  const backStep = (): void => {
    if (step === 1) return;
    setStep(step - 1);
  };

  return (
    <>
      <Head>
        <title> Total Partner website</title>
      </Head>
      <Navbar />
      <Main step={step} />
      <Footer nextStep={nextStep} backStep={backStep} />
    </>
  );
}

export default Index;
