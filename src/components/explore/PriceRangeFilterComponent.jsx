import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { priceRanges } from "@/lib/priceRange";

const PriceRangeFilterComponent = () => {
  return (
     <div>
          <label htmlFor='category'>Price range</label>
          <div className='mt-2'>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='All Prices' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Prices</SelectItem>
                {priceRanges.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
  )
}

export default PriceRangeFilterComponent
