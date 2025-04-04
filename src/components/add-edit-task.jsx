"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import { AddSquare } from 'iconsax-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTaskAction } from '../../actions/task-actions/task-actions';

export default function AddEditTask({ workspaceId, dataType }) {

  const [date, setDate] = useState(null);
  const [tag, setTag] = useState("");

  console.log("data in addEditTask passing:", dataType);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex gap-3 bg-blue-500 px-2 rounded-full cursor-pointer pe-4">
            <AddSquare size="32" color="white" />
            <p className="text-[16px] text-white">
              New Task
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[var(--ghost-white)]">
          <DialogHeader>
            <DialogTitle>
              {dataType === "add" ? "Create New Task" : "Update Task"}
            </DialogTitle>
          </DialogHeader>
          <form action={addTaskAction}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center gap-1">
                <Input id="id" name="id" type="hidden" value={workspaceId} />
                <Label htmlFor="title" className="text-right font-semibold">
                  Title
                </Label>
                <Input id="title" name="title" type="text" className="col-span-3 border-slate-200"
                  placeholder="Please type your task title" />
              </div>

              <div className="grid items-center gap-1">
                <Label htmlFor="details" className="text-right font-semibold">
                  Details
                </Label>
                <Input id="details" name="details" type="text" className="col-span-3 border-slate-200"
                  placeholder="Provide some details about your task (optional)" />
              </div>

              <div className="grid items-center gap-1">
                <Label htmlFor="tag" className="text-right font-semibold">
                  Tag
                </Label>
                <Select value={tag} onValueChange={setTag} name="tag">
                  <SelectTrigger className="w-full border-slate-200 bg-white">
                    <SelectValue placeholder="Please select a tag" />
                  </SelectTrigger>
                  <SelectContent className="bg-white cursor-pointer">
                    <SelectGroup>
                      <SelectItem value="DESIGN">DESIGN</SelectItem>
                      <SelectItem value="HOMEWORK">HOMEWORK</SelectItem>
                      <SelectItem value="ASSIGNMENT">ASSIGNMENT</SelectItem>
                      <SelectItem value="DEPLOYMENT">DEPLOYMENT</SelectItem>
                      <SelectItem value="GIT">GIT</SelectItem>
                      <SelectItem value="DATABASE">DATABASE</SelectItem>
                      <SelectItem value="MINI_PROJECT">MINI_PROJECT</SelectItem>
                      <SelectItem value="DOCUMENTATION">DOCUMENTATION</SelectItem>
                      <SelectItem value="FEATURE">FEATURE</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid items-center gap-1">
                <Label htmlFor="date" className="text-right font-semibold">
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full border-slate-200 justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {/* Hidden input to include the selected date in formData */}
                <Input
                  type="hidden"
                  name="date"
                  value={date ? format(date, "yyyy-MM-dd") : ""}
                />
              </div>

            </div>
            <DialogFooter>
              <Button type="submit" className={`shadow-lg border-1 ${dataType === "add" ? "border-[var(--royal-blue)] text-[var(--royal-blue)]" : "border-[var(--persian-green)] text-[var(--persian-green)]"} `}>
                {dataType === "add" ? "Create" : "Update"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
