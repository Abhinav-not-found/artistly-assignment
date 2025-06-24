"use client";
import OtherInfoForm from "@/components/onboarding/OtherInfoForm";
import PersonalInfoForm from "@/components/onboarding/PersonalInfoForm";
import ProfessionalInfoForm from "@/components/onboarding/ProfessionalInfoForm";
import StepComponent from "@/components/onboarding/StepComponent";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const OnBoardingPage = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="h-[110vh] bg-[#C1E965] dark:bg-[#043F2D] dark:text-white">
    <div className='p-4  h-fit px-20'>
      <h1 className='text-5xl font-bold mt-4'>Join Artistly as a Performer</h1>
      <p className='text-2xl mt-2'>
        Share your talent with event planners worldwide
      </p>

      <StepComponent step={step} />

      {step === 1 && <PersonalInfoForm />}
      {step === 2 && <ProfessionalInfoForm />}
      {step === 3 && <OtherInfoForm/>}

      <div className='flex justify-between mx-20 px-14 py-5 bg-white dark:bg-black rounded-3xl rounded-t-none'>
        {step > 1 ? (
          <Button onClick={() => setStep(step - 1)} className='bg-[#043F2D] dark:bg-[#C1E965]'>
            Prev
          </Button>
        ) : (
          <Button disabled={true} className='bg-[#043F2D] dark:bg-[#C1E965]'>
            Prev
          </Button>
        )}
        {step < 3 ? (
          <Button onClick={() => setStep(step + 1)} className='bg-[#043F2D] dark:bg-[#C1E965]'>
            Next
          </Button>
        ) : (
          <Button className='bg-[#043F2D] dark:bg-[#C1E965]'>Submit</Button>
        )}
      </div>
    </div>
    </div>

  );
};

export default OnBoardingPage;
