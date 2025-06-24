import { Input } from "@/components/ui/input";

const PersonalInfoForm = () => {
  return (
    <form className='mt-10 mx-20 px-14 py-10 bg-white dark:bg-black dark:text-white rounded-3xl rounded-b-none'>
      <h1 className='text-2xl font-semibold'>Personal Information</h1>
      <p className='mb-4'>Tell us about yourself</p>

      <div className='flex gap-4 w-full'>
        <div className='flex flex-col w-full'>
          <label htmlFor='fullname' className="font-semibold">Full Name</label>
          <Input
            type='text'
            className='mt-2 w-full'
            placeholder='Enter your full name'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='email' className="font-semibold">Email</label>
          <Input
            type='email'
            className='mt-2 w-full'
            placeholder='your.email@example.com'
          />
        </div>
      </div>
      <div className='flex gap-4 w-full mt-10'>
        <div className='flex flex-col w-full'>
          <label htmlFor='phone' className="font-semibold">Phone Number</label>
          <Input
            type='number'
            className='mt-2 w-full'
            placeholder='+1(555) 123-4567'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='location' className="font-semibold">Location</label>
          <Input
            type='text'
            className='mt-2 w-full'
            placeholder='City, State/Country'
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
