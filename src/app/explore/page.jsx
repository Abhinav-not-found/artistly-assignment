import ArtistCard from "@/components/explore/ArtistCard";
import { Funnel } from "lucide-react";
import { data } from "@/lib/data";
import CategoryFilterComponent from "@/components/explore/CategoryFilterComponent";
import LocationFilterComponent from "@/components/explore/LocationFilterComponent";
import PriceRangeFilterComponent from "@/components/explore/PriceRangeFilterComponent";

// make filter  functionality

const ExplorePage = () => {
  return (
    <div className='p-4 m-auto'>
      <h1 className='text-5xl font-bold mt-4'>Discover Amazing Artists</h1>
      <p className='text-2xl mt-2'>
        Browse through our curated collection of talented performers
      </p>
      <div className='w-full h-40 bg-stone-100 dark:bg-stone-900 mt-10 rounded-3xl p-4 px-6'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-xl flex gap-1 items-center'>
            <Funnel className='size-5' />
            Filters
          </p>
        </div>
        <div className="mt-4 w-full flex gap-10">
          <CategoryFilterComponent />
          <LocationFilterComponent/>
          <PriceRangeFilterComponent/>
        </div>
      </div>
      <div className='w-fit m-auto grid grid-cols-4 auto-rows-max gap-x-10 gap-y-10 mt-10'>
        {data.map((item) => (
          <ArtistCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
