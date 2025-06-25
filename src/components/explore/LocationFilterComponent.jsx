import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locations } from "@/lib/locations";

const LocationFilterComponent = () => {
  return (
    <div>
      <label htmlFor='category'>Location</label>
      <div className='mt-2'>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='All Location' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Location</SelectItem>
            {locations.map((item) => (
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

export default LocationFilterComponent
