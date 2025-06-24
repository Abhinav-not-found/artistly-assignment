import React from "react";

const StepComponent = ({ step }) => {
  const steps = [1, 2, 3];

  return (
    <div className='flex justify-between my-5 px-28'>
      {steps.map((num, idx) => {
        const isActive = step >= num;
        const isLast = idx === steps.length - 1;

        return (
          <div key={num} className='flex items-center gap-4'>
            <div
              className={`py-2 px-5 text-2xl  rounded-full ${
                isActive ? 'bg-[#043F2D] dark:bg-[#C1E965] text-white dark:text-black' : 'bg-secondary/50 text-black'
              }`}
            >
              {num}
            </div>
            {!isLast && (
              <div
                className={`w-40 h-2 ${
                  step > num ? 'bg-[#043F2D] dark:bg-[#C1E965]' : 'bg-secondary/50'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepComponent;
