import React from "react";
import { Textarea } from "../ui/textarea";
import { Toggle } from "../ui/toggle";
import { categories } from "@/lib/categories";
import { Input } from "../ui/input";
import CategorySelect from "./CategorySelect";

const ProfessionalInfoForm = () => {
  return (
    <form className='mt-10 mx-20 px-14 py-10 bg-white dark:bg-black text-white rounded-3xl rounded-b-none'>
      <h1 className='text-2xl font-semibold'>Professional Information</h1>
      <p className='mb-4'>Share your professional background</p>

      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col w-full'>
          <label htmlFor='bio' className="font-semibold">Short Bio</label>
          <Textarea
            type='text'
            className='mt-2 w-full'
            placeholder='Tell us about your background, experience, and what makes you unique as a performer...'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='category' className="font-semibold">Performance Categories</label>
          <CategorySelect/>
          <div className='flex flex-col w-full mt-4'>
            <label htmlFor='experience' className="font-semibold">Your Experience</label>
            <Input className='mt-2 w-full' placeholder='eg., 5 years, 10+ years'/>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfessionalInfoForm;
