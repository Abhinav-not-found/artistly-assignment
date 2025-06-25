import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

const ArtistCard = ({ data }) => {
  return (
    <div className='w-[20rem] h-fit bg-red-50 dark:text-black rounded-3xl flex flex-col justify-between'>
      <div
        className='w-full h-74 rounded-3xl rounded-b-none relative'
        style={{
          backgroundImage: `url('${data.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(80%)",
        }}
      >
        <Badge
          variant='outline'
          className='absolute top-5 left-5 border border-white font-bold text-white'
        >
          {data.category}
        </Badge>
      </div>
      <div className='bg-stone-100 dark:bg-stone-900 w-full h-64 rounded-3xl rounded-t-none p-4 flex flex-col justify-between'>
        <div className='flex flex-col'>
          <p className='font-semibold text-2xl dark:text-white'>{data.name}</p>
          <p className='flex items-center text-muted-foreground text-sm mt-1'>
            <MapPin className='size-4' />
            {data.location}
          </p>
        </div>
        <div className='flex items-start'>
          <p className='text-muted-foreground text-sm'>{data.description}</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='dark:text-white'>
            <p className='text-sm capitalize'>fees range</p>
            <p className='font-semibold text-lg'>{data.feeRange}</p>
          </div>
          <Button className='bg-[#043F2D] dark:bg-[#C1E965]'>
            Ask for Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
