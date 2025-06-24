import React, { useState } from "react";
import { categories } from "@/lib/categories";
import { Checkbox } from "@/components/ui/checkbox";

const CategorySelect = () => {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="relative">
      <details className="border rounded p-2 cursor-pointer bg-white dark:bg-black dark:text-white w-full max-w-md">
        <summary className="list-none font-medium">
          {selected.length > 0 ? selected.join(", ") : "Select categories"}
        </summary>
        <div className="flex flex-col gap-2 mt-2 max-h-40 overflow-auto">
          {categories.map((cat, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                checked={selected.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </details>
    </div>
  );
};

export default CategorySelect;
