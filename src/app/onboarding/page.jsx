"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalInfoForm from "@/components/onboarding/PersonalInfoForm";
import ProfessionalInfoForm from "@/components/onboarding/ProfessionalInfoForm";
import OtherInfoForm from "@/components/onboarding/OtherInfoForm";
import StepComponent from "@/components/onboarding/StepComponent";
import { Button } from "@/components/ui/button";
import { onboardingSchema } from "@/lib/schema";

const OnBoardingPage = () => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: yupResolver(onboardingSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      location: "",
      bio: "",
      categories: [],
      experience: "",
      feeRange: "",
      languages: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Final Data:", data);
  };

  return (
    <div className="h-fit min-h-screen bg-[#C1E965] dark:bg-[#043F2D] dark:text-white">
      <div className="p-4 h-fit px-20">
        <h1 className="text-5xl font-bold mt-4">Join Artistly as a Performer</h1>
        <p className="text-2xl mt-2">
          Share your talent with event planners worldwide
        </p>

        <StepComponent step={step} />

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 1 && <PersonalInfoForm />}
            {step === 2 && <ProfessionalInfoForm />}
            {step === 3 && <OtherInfoForm />}

            <div className="flex justify-between mx-20 px-14 py-5 bg-white dark:bg-black rounded-3xl rounded-t-none">
              <Button
                onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                type="button"
                className="bg-[#043F2D] dark:bg-[#C1E965]"
                disabled={step === 1}
              >
                Prev
              </Button>

              {step < 3 ? (
                <Button
                  onClick={() => {
                    setStep((prev) => prev + 1);
                  }}
                  type="button"
                  className="bg-[#043F2D] dark:bg-[#C1E965]"
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="bg-[#043F2D] dark:bg-[#C1E965]">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default OnBoardingPage;
