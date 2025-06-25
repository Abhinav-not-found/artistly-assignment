import React from "react";
import { useFormContext } from "react-hook-form";
import { categories } from "@/lib/categories";
import { Checkbox } from "@/components/ui/checkbox";

const CategorySelect = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selected = watch("categories") || [];

  const toggleCategory = (value) => {
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setValue("categories", updated, { shouldValidate: true });
  };

  return (
    <div className="relative">
      <details className="border rounded p-2 cursor-pointer bg-white dark:bg-black dark:text-white w-full max-w-md">
        <summary className="list-none font-medium">
          {selected.length > 0 ? selected.join(", ") : "Select categories"}
        </summary>
        <div className="flex flex-col gap-2 mt-2 max-h-40 overflow-auto">
          {categories.map((cat, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selected.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </details>
      {errors.categories && (
        <p className="text-red-500 text-sm mt-1">{errors.categories.message}</p>
      )}
    </div>
  );
};

export default CategorySelect;
