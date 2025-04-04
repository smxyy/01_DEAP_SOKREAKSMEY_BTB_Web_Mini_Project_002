"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function CardComponent({ task }) {
  const [status, setStatus] = useState(task.status); 

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    setStatus(task.status);
  }, [task.status]);

  const formattedEndDate = format(new Date(task.endDate), "PPP");

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* task details */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
            {task.tag}
          </p>

          <div
            className={`rounded-full w-8 h-8 ${
              status === "FINISHED"
                ? "bg-persian-green"
                : status === "IN_PROGRESS"
                ? "bg-royal-blue"
                : "bg-watermelon-red"
            }`}
          ></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select value={status} onValueChange={handleStatusChange} name="status">
          <SelectTrigger
            className={`w-36 truncate ${
              status === "FINISHED"
                ? "border-persian-green text-persian-green"
                : status === "IN_PROGRESS"
                ? "border-royal-blue text-royal-blue"
                : "border-watermelon-red text-watermelon-red"
            } text-[12px]`}
          >
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent className="bg-white cursor-pointer">
            <SelectItem value="NOT_STARTED">Not Started</SelectItem>
            <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
            <SelectItem value="FINISHED">Finished</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-3 text-light-steel-blue text-[14px]">
          <Clock size={18} /> {formattedEndDate}
        </p>
      </div>
    </div>
  );
}