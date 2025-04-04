"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import {useState} from "react";

export default function CardComponent() {
  const [tag, setTag] = useState("NOT_STARTED");
  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">HRD Design</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          Description
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            DESIGN
          </p>

          {/* status */}
          <div className={`rounded-full w-8 h-8 ${tag === "FINISHED" ? "bg-persian-green" : tag === "IN_PROGRESS" ? "bg-royal-blue" : "bg-watermelon-red"}`}></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select onValueChange={setTag} name="tag">
          <SelectTrigger
            className={`w-36 truncate ${tag === "FINISHED" ? "border-persian-green text-persian-green" : tag === "IN_PROGRESS" ? "border-royal-blue text-royal-blue" : "border-watermelon-red text-watermelon-red"} text-[12px]`}>
            <SelectValue placeholder={"NOT_STARTED"} />
          </SelectTrigger>
          <SelectContent className="bg-white cursor-pointer">
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue text-[14px]">
          <Clock size={18} /> Mar 23, 2025
        </p>
      </div>
    </div>
  );
}
