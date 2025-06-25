import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { languages } from "@/lib/languages";

const OtherInfoForm = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedLanguages = watch("languages") || [];

  const toggleLanguage = (lang) => {
    const updated = selectedLanguages.includes(lang)
      ? selectedLanguages.filter((l) => l !== lang)
      : [...selectedLanguages, lang];

    setValue("languages", updated, { shouldValidate: true });
  };

  return (
    <div className='mt-10 md:mx-20 px-6 md:px-14 py-8 md:py-10 bg-white dark:bg-black rounded-3xl rounded-b-none'>
      <h1 className='text-2xl font-semibold'>Other Information</h1>
      <p className='mb-4'>Tell us about your fee-range and languages</p>

      <div className='flex flex-col w-full'>
        <label htmlFor='fee' className='font-semibold'>
          Fee range
        </label>
        <div className='mt-2'>
          <Select
            onValueChange={(val) =>
              setValue("feeRange", val, { shouldValidate: true })
            }
            defaultValue={watch("feeRange")}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select your typical fee range' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1000'>Under $1,000</SelectItem>
              <SelectItem value='1000-2500'>$1,000 - $2,500</SelectItem>
              <SelectItem value='2500-5000'>$2,500 - $5,000</SelectItem>
              <SelectItem value='5000-10000'>$5,000 - $10,000</SelectItem>
              <SelectItem value='10000'>Over $10,000</SelectItem>
            </SelectContent>
          </Select>
          {errors.feeRange && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.feeRange.message}
            </p>
          )}
        </div>
      </div>

      <div className='flex flex-col w-full mt-4'>
        <label htmlFor='language' className='font-semibold'>
          Language Spoken
        </label>
        <div className='grid grid-cols-3 gap-y-3 gap-x-6 mt-2'>
          {languages.map((lang) => (
            <label key={lang} className='flex items-center gap-2'>
              <Checkbox
                checked={selectedLanguages.includes(lang)}
                onCheckedChange={() => toggleLanguage(lang)}
              />
              <span className='font-semibold'>{lang}</span>
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className='text-red-500 text-sm mt-1'>
            {errors.languages.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default OtherInfoForm;
